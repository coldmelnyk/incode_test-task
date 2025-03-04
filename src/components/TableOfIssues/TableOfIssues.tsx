import { IssuesColumn } from '../IssuesColumn';
import * as React from 'react';
import { Issue } from '../../types';

interface Props {
  openedIssuesArray: Issue[] | null;
  openedAndAssignedIssuesArray: Issue[] | null;
  closedIssuesArray: Issue[] | null;
  isLoading: boolean;
}

export const TableOfIssues: React.FC<Props> = ({
  openedIssuesArray,
  openedAndAssignedIssuesArray,
  closedIssuesArray,
  isLoading
}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <IssuesColumn
        columnTitle="ToDo"
        issuesArray={openedIssuesArray}
        isLoading={isLoading}
      />

      <IssuesColumn
        columnTitle="In Progress"
        issuesArray={openedAndAssignedIssuesArray}
        isLoading={isLoading}
      />

      <IssuesColumn
        columnTitle="Done"
        issuesArray={closedIssuesArray}
        isLoading={isLoading}
      />
    </div>
  );
};
