import { useRepo } from '../app/store.ts';
import { useEffect, useState } from 'react';
import { cutRepoNamesFromUrl, fetchRepo } from '../utils';
import { Input, Button, ConfigProvider, Breadcrumb } from 'antd';
import { breadcrumbsStyles, buttonStyles, inputStyles } from '../utils/styles';

export const MainPage = () => {
  const repoInfoArray = useRepo(state => state.repo);
  const issuesArray = useRepo(state => state.issues);
  const setRepo = useRepo(state => state.setRepo);
  const setIssues = useRepo(state => state.setIssues);

  const [inputValue, setInputValue] = useState<string>('');
  const [breadcrumbsNames, setBreadcrumbsNames] = useState<string[]>([]);

  useEffect(() => {}, []);

  console.log('Repo', repoInfoArray);
  console.log('Issues', issuesArray);

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: buttonStyles,
            Input: inputStyles,
            Breadcrumb: breadcrumbsStyles
          }
        }}
      >
        <div className="p-3">
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
        </div>
      </ConfigProvider>
    </>
  );
};
