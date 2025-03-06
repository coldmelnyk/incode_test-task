import * as React from 'react';
import { formatNumbers } from '../../utils';

interface Props {
  count: number;
}

export const FavCounter: React.FC<Props> = ({ count }) => {
  return (
    <div className="flex items-center gap-1">
      <img
        className="block h-4 w-4"
        src="./assets/icons/star.png"
        alt="favstar-icon"
      />
      <p className="text-[12px] font-semibold">{`${formatNumbers.format(count)} stars`}</p>
    </div>
  );
};
