import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Components/Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
    None: null,
  };
  const defaultValue = 'hsl(49, 100%, 58%)';

  const value = select(label, options, defaultValue);
  return <Button color={value}>Close / Save</Button>;
};

export const Secondary = () => <Button secondary>Remove</Button>;
