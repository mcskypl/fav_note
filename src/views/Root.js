import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import Notes from './Notes';
import Twitters from './Twitters';
import Articles from './Articles';

const Root = () => (

  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/twitters" component={Twitters} />
        <Route path="/articles" component={Articles} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>

);

export default Root;
