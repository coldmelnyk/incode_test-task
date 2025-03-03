import { useRepo } from '../app/store.ts';
import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { breadcrumbsStyles, buttonStyles, inputStyles } from '../utils/styles';
import { SearchSection } from '../components';

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
        <SearchSection
          breadcrumbsNames={breadcrumbsNames}
          setBreadcrumbsNames={setBreadcrumbsNames}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setIssues={setIssues}
          setRepo={setRepo}
        />
      </ConfigProvider>
    </>
  );
};
