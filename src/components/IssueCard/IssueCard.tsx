import * as React from 'react';
import { Issue } from '../../types';

interface Props {
  issue: Issue;
}

export const IssueCard: React.FC<Props> = ({ issue }) => {
  return (
    <div className='border'>
      {issue.title}
    </div>
  );
}