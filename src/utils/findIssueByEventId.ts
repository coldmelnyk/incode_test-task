import { Issue } from '../types';
import { UniqueIdentifier } from '@dnd-kit/core';

interface Props {
  id: UniqueIdentifier | string;
  openedIssuesArray: Issue[] | null;
  openedAndAssignedIssuesArray: Issue[] | null;
  closedIssuesArray: Issue[] | null;
}

export const findIssueByEventId = ({
  id,
  openedIssuesArray,
  openedAndAssignedIssuesArray,
  closedIssuesArray
}: Props) => {
  const allArraysAreExisted =
    openedIssuesArray && openedAndAssignedIssuesArray && closedIssuesArray;

  if (allArraysAreExisted) {
    const itsOpened = openedIssuesArray.find(
      issue => issue.id.toString() === id && issue.assignee === null
    );

    if (itsOpened) {
      return [itsOpened, 'ToDo'];
    }

    const itsOpenedAndAssigned = openedAndAssignedIssuesArray.find(
      issue => issue.id.toString() === id && issue.assignee !== null
    );

    if (itsOpenedAndAssigned) {
      return [itsOpenedAndAssigned, 'In Progress'];
    }

    const itsClosed = closedIssuesArray.find(
      issue => issue.id.toString() === id && issue.state === 'closed'
    );

    if (itsClosed) {
      return [itsClosed, 'Done'];
    }
  }

  return [];
};
