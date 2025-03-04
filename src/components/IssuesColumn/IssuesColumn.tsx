import * as React from 'react';
import { Issue } from '../../types';
import { IssueCard } from '../IssueCard';
import { Skeleton } from 'antd';

interface Props {
  columnTitle: string;
  issuesArray: Issue[] | null;
  isLoading: boolean;
}

export const IssuesColumn: React.FC<Props> = ({
  columnTitle,
  issuesArray,
  isLoading
}) => {
  return (
    <section className="flex flex-col">
      <p className="h-12 text-center leading-[48px]">{columnTitle}</p>

      <div className="flex flex-col gap-2 items-center bg-gray-400 border border-black p-2 min-h-[50dvh]">
        {isLoading ? (
          <>
            <Skeleton
              active
              className="flex flex-col gap-1 bg-white border border-black rounded-xl p-3 min-w-[100%]"
            />
            <Skeleton
              active
              className="flex flex-col gap-1 bg-white border border-black rounded-xl p-3 min-w-[100%]"
            />
            <Skeleton
              active
              className="flex flex-col gap-1 bg-white border border-black rounded-xl p-3 min-w-[100%]"
            />
          </>
        ) : (
          issuesArray &&
          issuesArray.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))
        )}
      </div>
    </section>
  );
};
