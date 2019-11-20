import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';

configure(require.context('../src/components', true, /\.stories\.js$/), module);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
));
