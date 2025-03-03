import { Breadcrumb, Button, Input } from 'antd';
import { cutRepoNamesFromUrl, fetchRepo } from '../../utils';
import * as React from 'react';
import { Issue, Repo } from '../../types';

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setRepo: (repo: Repo) => void;
  setIssues: (newIssues: Issue[]) => void;
  breadcrumbsNames: string[];
  setBreadcrumbsNames: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchSection: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setBreadcrumbsNames,
  breadcrumbsNames,
  setRepo,
  setIssues
}) => {
  return (
    <section className="p-3">
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
                  setIssues(resp[1]);
                  setBreadcrumbsNames(repoNamesArray);
                }
              );
            }
          }}
        >
          Load issues
        </Button>
      </div>

      {breadcrumbsNames.length !== 0 && (
        <div>
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
      )}
    </section>
  );
};
