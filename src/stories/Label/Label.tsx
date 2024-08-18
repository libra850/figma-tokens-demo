import React from 'react';
import './label.scss';

export interface LabelProps {
  type: 'exit' | 'series' | 'investor';
  name: string;
}

export const Label = ({
  name,
  type,
  ...props
}: LabelProps) => {
  return (
    <label
      className={['storybook-label', `${type}`].join(' ')}
      {...props}
    >
      {name}
    </label>
  );
};
