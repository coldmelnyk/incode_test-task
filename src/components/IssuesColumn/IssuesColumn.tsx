import * as React from 'react';
import { Issue } from '../../types';
import { IssueCard } from '../IssueCard';

interface Props {
  columnTitle: string;
  issuesArray: Issue[] | null;
}

export const IssuesColumn: React.FC<Props> = ({ columnTitle, issuesArray }) => {
  return (
    <section className="flex flex-col">
      <p className="h-10 text-center leading-10">{columnTitle}</p>

      <div className="flex flex-col gap-2 items-center bg-gray-400 border border-black p-2 min-h-[50dvh]">
        {issuesArray && (
          issuesArray.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        )}
      </div>
    </section>
  );
};
