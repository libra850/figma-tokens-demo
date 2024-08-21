import React from 'react';
import './label.scss';

export interface LabelProps {
  type: 'exit' | 'series' | 'investor';
  name: string;
}

export const Label = ({
  name,
  type,
}: LabelProps) => {
  return (
    <div className={['storybook-label'].join(' ')}>
      <label className={[`${type}`].join(' ')}>
        {name}
      </label>
    </div>
  );
};
