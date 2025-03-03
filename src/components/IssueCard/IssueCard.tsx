import * as React from 'react';
import { Issue } from '../../types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface Props {
  issue: Issue;
}

export const IssueCard: React.FC<Props> = ({ issue }) => {
  return (
    <div className="flex flex-col gap-1 bg-white border border-black rounded-xl px-2 py-1 min-w-[100%]">
      <p className="text-[10px] font-extrabold">{issue.title}</p>
      <p>{`#${issue.number} opened ${dayjs(issue.created_at).fromNow()}`}</p>
      <p>{`${issue.user.login} | Comments: ${issue.comments}`}</p>
    </div>
  );
};
