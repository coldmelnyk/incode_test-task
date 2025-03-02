import { useIssues } from '../app/store.ts';
import { useEffect, useState } from 'react';
import { fetchIssues } from '../utils';
import { Input, Button, ConfigProvider } from 'antd';
import { buttonStyles, inputStyles } from '../utils/styles';

export const MainPage = () => {
  const issuesArray = useIssues(state => state.issues);
  const setIssues = useIssues(state => state.setIssues);

  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    fetchIssues('facebook/react').then(resp => setIssues(resp));
  }, []);

  console.log('Component re-rendered:', issuesArray);

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

            <Button>Primary Button</Button>
          </div>
        </div>
      </ConfigProvider>
    </>
  );
};
