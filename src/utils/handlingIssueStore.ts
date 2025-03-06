import { Issue } from '../types';

type TypeOfHandle = 'add' | 'remove';
type NewColumn = 'ToDo' | 'In Progress' | 'Done';

export const handlingIssueStore = (
  issueStore: Issue[],
  issue: Issue,
  type: TypeOfHandle,
  newColumn: NewColumn
) => {
  switch (type) {
    case 'add':
      if (newColumn === 'ToDo') {
        return [{ ...issue, state: 'open', assignee: null }, ...issueStore];
      }

      if (newColumn === 'In Progress') {
        return [{ ...issue, state: 'open', assignee: true }, ...issueStore];
      }

      if (newColumn === 'Done') {
        return [{ ...issue, state: 'closed' }, ...issueStore];
      }

      return issueStore;

    case 'remove':
      return [...issueStore].filter(
        issueOfStore => issueOfStore.id.toString() !== issue.id.toString()
      );
  }
};
