import React from 'react';
import Input from './Input';

export default {
  title: 'Components/Input',
};

export const Normal = () => <Input placeholder="login" />;
export const Search = () => <Input search placeholder="search" />;
