import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import BasicLayout from './layout/basicLayout'

const test = () => <div>test without header</div>

const registRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* 不带header的页面 */}
      <Route path="/other" component={ test }></Route>
      {/* 带header页面 */}
      <Route path="/" component={ BasicLayout }></Route>
    </Switch>
  </BrowserRouter>
)

export default registRouter;
