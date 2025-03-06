import * as React from 'react';
import { Issue } from '../../types';
import { IssueCard } from '../IssueCard';
import { Skeleton } from 'antd';
import { useDroppable } from '@dnd-kit/core';

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
  const { isOver, setNodeRef } = useDroppable({
    id: `${columnTitle}`
  });
  const style = {
    color: isOver ? 'green' : undefined
  };

  return (
    <section className="flex flex-col">
      <p style={style} className="h-12 text-center leading-[48px]">
        {columnTitle}
      </p>

      <div
        ref={setNodeRef}
        className="flex flex-col gap-2 items-center bg-gray-400 border border-black p-2 min-h-[50dvh]"
      >
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
          issuesArray.map(issue => <IssueCard key={issue.id} issue={issue} />)
        )}
      </div>
    </section>
  );
};
