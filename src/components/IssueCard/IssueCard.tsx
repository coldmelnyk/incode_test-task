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
    <article className="flex flex-col gap-1 bg-white border border-black rounded-xl p-3 min-w-[100%]">
      <p className="text-[14px] font-extrabold break-all">{issue.title}</p>
      <p>{`#${issue.number} opened ${dayjs(issue.created_at).fromNow()}`}</p>
      <p>{`${issue.user.login} | Comments: ${issue.comments}`}</p>
    </article>
  );
};
