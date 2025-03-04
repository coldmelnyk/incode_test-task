import { useRepo } from '../app/store.ts';
import { useState } from 'react';
import { ConfigProvider } from 'antd';
import { breadcrumbsStyles, buttonStyles, inputStyles } from '../utils/styles';
import { SearchSection, TableOfIssues } from '../components';

export const MainPage = () => {
  const repoInfoArray = useRepo(state => state.repo);
  const openedIssuesArray = useRepo(state => state.openedIssues);
  const openedAndAssignedIssuesArray = useRepo(
    state => state.openedAndAssignedIssues
  );
  const closedIssuesArray = useRepo(state => state.closedIssues);
  const setRepo = useRepo(state => state.setRepo);
  const setOpenedIssues = useRepo(state => state.setOpenedIssues);
  const setOpenedAndAssignedIssues = useRepo(
    state => state.setOpenedAndAssignedIssues
  );
  const setClosedIssues = useRepo(state => state.setClosedIssues);

  const [inputValue, setInputValue] = useState<string>('');
  const [breadcrumbsNames, setBreadcrumbsNames] = useState<string[]>([]);

  console.log('Repo', repoInfoArray);
  console.log('Opened Issues', openedIssuesArray);
  console.log('O & A Issues', openedAndAssignedIssuesArray);
  console.log('Closed Issues', closedIssuesArray);

  return (
    <div className="p-3">
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
          setOpenedIssues={setOpenedIssues}
          setOpenedAndAssignedIssues={setOpenedAndAssignedIssues}
          setClosedIssues={setClosedIssues}
          setRepo={setRepo}
        />

        <TableOfIssues
          openedIssuesArray={openedIssuesArray}
          openedAndAssignedIssuesArray={openedAndAssignedIssuesArray}
          closedIssuesArray={closedIssuesArray}
        />
      </ConfigProvider>
    </div>
  );
};
