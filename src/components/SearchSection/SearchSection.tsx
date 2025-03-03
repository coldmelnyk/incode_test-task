import { Breadcrumb, Button, Input } from 'antd';
import { cutRepoNamesFromUrl, fetchRepo } from '../../utils';
import * as React from 'react';
import { Issue, Repo } from '../../types';
import cn from 'classnames';

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setRepo: (repo: Repo) => void;
  setOpenedIssues: (newIssues: Issue[]) => void;
  setOpenedAndAssignedIssues: (newIssues: Issue[]) => void;
  setClosedIssues: (newIssues: Issue[]) => void;
  breadcrumbsNames: string[];
  setBreadcrumbsNames: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchSection: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setBreadcrumbsNames,
  breadcrumbsNames,
  setRepo,
  setOpenedIssues,
  setOpenedAndAssignedIssues,
  setClosedIssues
}) => {
  return (
    <section>
      <div className="flex gap-4">
        <Input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          placeholder="Enter root link for GitHub repo"
        />

        <Button
          onClick={() => {
            const repoNamesArray = cutRepoNamesFromUrl(inputValue);

            if (repoNamesArray.length === 2) {
              fetchRepo(`${repoNamesArray[0]}/${repoNamesArray[1]}`).then(
                resp => {
                  setRepo(resp[0]);
                  setOpenedIssues(resp[1]);
                  setOpenedAndAssignedIssues(resp[2]);
                  setClosedIssues(resp[3]);
                  setBreadcrumbsNames(repoNamesArray);
                }
              );
            }
          }}
        >
          Load issues
        </Button>
      </div>

      <div
        className={cn('mt-2 opacity-0', {
          'opacity-100': breadcrumbsNames.length !== 0
        })}
      >
        <Breadcrumb
          separator=">"
          items={[
            {
              title: `${breadcrumbsNames[0]}`
            },
            {
              title: `${breadcrumbsNames[1]}`
            }
          ]}
        />
      </div>
    </section>
  );
};
