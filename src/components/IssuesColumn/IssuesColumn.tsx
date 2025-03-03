import * as React from 'react';

interface Props {
  columnTitle: string;
}

export const IssuesColumn: React.FC<Props> = ({ columnTitle }) => {
  return (
    <div className="flex flex-col">
      <p className='h-10 text-center leading-10'>{columnTitle}</p>

      <div className="flex flex-col items-center bg-gray-400 border border-black px-2 py-1 min-h-[50dvh]">
        Issues column comp
      </div>
    </div>
  );
};
