import { useRepo } from '../app/store.ts';
import { useEffect, useState } from 'react';
import { fetchRepo } from '../utils';
import { Input, Button, ConfigProvider } from 'antd';
import { buttonStyles, inputStyles } from '../utils/styles';

export const MainPage = () => {
  const repoInfoArray = useRepo(state => state.repo);
  const issuesArray = useRepo(state => state.issues);
  const setRepo = useRepo(state => state.setRepo);
  const setIssues = useRepo(state => state.setIssues);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    fetchRepo('facebook/react').then(resp => {
      setRepo(resp[0]);
      setIssues(resp[1]);
    });
  }, []);

  console.log('Repo', repoInfoArray);
  console.log('Issues', issuesArray);

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: buttonStyles,
            Input: inputStyles
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

            <Button>Load issues</Button>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};
