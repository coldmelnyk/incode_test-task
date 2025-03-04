import { Breadcrumb, Button, Input } from 'antd';
import { cutRepoNamesFromUrl, fetchRepo } from '../../utils';
import * as React from 'react';
import { Issue, Repo } from '../../types';
import cn from 'classnames';
import { FavCounter } from '../FavCounter';
import { EmptyComponent } from '../EmptyComponent';

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setRepo: (repo: Repo) => void;
  setOpenedIssues: (newIssues: Issue[]) => void;
  setOpenedAndAssignedIssues: (newIssues: Issue[]) => void;
  setClosedIssues: (newIssues: Issue[]) => void;
  breadcrumbsNames: string[];
  setBreadcrumbsNames: React.Dispatch<React.SetStateAction<string[]>>;
  repoInfoArray: Repo | null;
}

export const SearchSection: React.FC<Props> = ({
  inputValue,
  setInputValue,
  setBreadcrumbsNames,
  breadcrumbsNames,
  setRepo,
  setOpenedIssues,
  setOpenedAndAssignedIssues,
  setClosedIssues,
  repoInfoArray
}) => {
  const handleFetchingRepoOnClick = () => {
    const repoNamesArray = cutRepoNamesFromUrl(inputValue);

    if (repoNamesArray.length === 2) {
      fetchRepo(`${repoNamesArray[0]}/${repoNamesArray[1]}`).then(resp => {
        setRepo(resp[0]);
        setOpenedIssues(resp[1]);
        setOpenedAndAssignedIssues(resp[2]);
        setClosedIssues(resp[3]);
        setBreadcrumbsNames(repoNamesArray);
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleFetchingRepoOnClick();
  };

  return (
    <section>
      <form className="flex gap-4" onSubmit={event => handleSubmit(event)}>
        <Input
          className="border-black"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          placeholder="Enter a link for GitHub repo"
        />

        <Button
          className="border-black"
          onClick={() => handleFetchingRepoOnClick()}
        >
          Load issues
        </Button>
      </form>

      {repoInfoArray !== null ? (
        <div
          className={cn('flex items-center gap-3 mt-2 opacity-0', {
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

          <FavCounter count={repoInfoArray.stargazers_count} />
        </div>
      ) : (
        <EmptyComponent height={30} />
      )}
    </section>
  );
};
