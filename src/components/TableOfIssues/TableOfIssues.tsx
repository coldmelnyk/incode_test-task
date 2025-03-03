import { IssuesColumn } from '../IssuesColumn';
import * as React from 'react';
import { Issue } from '../../types';

interface Props {
  openedIssuesArray: Issue[] | null;
  openedAndAssignedIssuesArray: Issue[] | null;
  closedIssuesArray: Issue[] | null;
}

export const TableOfIssues: React.FC<Props> = () => {


  return (
    <div className="grid grid-cols-3 gap-5">
      <IssuesColumn columnTitle='ToDo'/>
      <IssuesColumn columnTitle='In Progress'/>
      <IssuesColumn columnTitle='Done'/>
    </div>
  );
};
