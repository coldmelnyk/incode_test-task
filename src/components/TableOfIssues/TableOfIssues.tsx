import { IssuesColumn } from '../IssuesColumn';
import * as React from 'react';
import { Issue } from '../../types';

interface Props {
  openedIssuesArray: Issue[] | null;
  openedAndAssignedIssuesArray: Issue[] | null;
  closedIssuesArray: Issue[] | null;
}

export const TableOfIssues: React.FC<Props> = ({
  openedIssuesArray,
  openedAndAssignedIssuesArray,
  closedIssuesArray
}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <IssuesColumn
        columnTitle="ToDo"
        issuesArray={openedIssuesArray}
      />

      <IssuesColumn
        columnTitle="In Progress"
        issuesArray={openedAndAssignedIssuesArray}
      />

      <IssuesColumn
        columnTitle="Done"
        issuesArray={closedIssuesArray}
      />
    </div>
  );
};
