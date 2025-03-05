import { IssuesColumn } from '../IssuesColumn';
import * as React from 'react';
import { Issue } from '../../types';
import { DndContext, DragEndEvent } from '@dnd-kit/core';

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
  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      <DndContext onDragEnd={handleDragEnd}>
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
      </DndContext>
    </div>
  );
};
