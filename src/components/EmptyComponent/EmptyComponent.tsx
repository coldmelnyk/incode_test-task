import * as React from 'react';

interface Props {
  height: number;
}

export const EmptyComponent: React.FC<Props> = ({ height }) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: '100%',
        opacity: 0,
        cursor: 'default'
      }}
      className="w-full"
    >
      EmptyComponent comp
    </div>
  );
};
