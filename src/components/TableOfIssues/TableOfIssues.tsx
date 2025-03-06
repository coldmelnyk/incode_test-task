import { IssuesColumn } from '../IssuesColumn';
import * as React from 'react';
import { Issue } from '../../types';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { findIssueByEventId } from '../../utils/findIssueByEventId.ts';
import { handlingIssueStore } from '../../utils/handlingIssueStore.ts';

interface Props {
  openedIssuesArray: Issue[] | null;
  openedAndAssignedIssuesArray: Issue[] | null;
  closedIssuesArray: Issue[] | null;
  isLoading: boolean;
  setOpenedIssues: (newIssues: Issue[]) => void;
  setOpenedAndAssignedIssues: (newIssues: Issue[]) => void;
  setClosedIssues: (newIssues: Issue[]) => void;
}

type DraggElement = [Issue, string];

export const TableOfIssues: React.FC<Props> = ({
  isLoading,
  setOpenedIssues,
  setOpenedAndAssignedIssues,
  setClosedIssues,
  openedIssuesArray,
  openedAndAssignedIssuesArray,
  closedIssuesArray
}) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const id = event.active.id.toString();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const draggedElement: DraggElement = findIssueByEventId({
      id,
      closedIssuesArray,
      openedIssuesArray,
      openedAndAssignedIssuesArray
    });

    const isDraggedElementDroppedInOtherColumn =
      event.over && draggedElement[1] && draggedElement[1] !== event.over.id;

    if (isDraggedElementDroppedInOtherColumn) {
      if (event.over!.id === 'Done') {
        setClosedIssues(
          handlingIssueStore(
            closedIssuesArray!,
            draggedElement[0],
            'add',
            'Done'
          )
        );
      }

      if (draggedElement[1] === 'Done') {
        setClosedIssues(
          handlingIssueStore(
            closedIssuesArray!,
            draggedElement[0]!,
            'remove',
            'Done'
          )
        );
      }

      if (event.over!.id === 'In Progress') {
        setOpenedAndAssignedIssues(
          handlingIssueStore(
            openedAndAssignedIssuesArray!,
            draggedElement[0]!,
            'add',
            'In Progress'
          )
        );
      }

      if (draggedElement[1] === 'In Progress') {
        setOpenedAndAssignedIssues(
          handlingIssueStore(
            openedAndAssignedIssuesArray!,
            draggedElement[0]!,
            'remove',
            'In Progress'
          )
        );
      }

      if (event.over!.id === 'ToDo') {
        setOpenedIssues(
          handlingIssueStore(
            openedIssuesArray!,
            draggedElement[0]!,
            'add',
            'ToDo'
          )
        );
      }

      if (draggedElement[1] === 'ToDo') {
        setOpenedIssues(
          handlingIssueStore(
            openedIssuesArray!,
            draggedElement[0]!,
            'remove',
            'ToDo'
          )
        );
      }
    }
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
