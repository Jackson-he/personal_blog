import React, { Component } from 'react';
import styles from './basicLayout.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import router from '../router';

class pageDetail extends Component {
  render () {
    const RouteComponents = router.map((item, index) => <Route exact path={item.path} key ={ index } component={ item.component }/>)

    return (
      <div style={ styles.wrapper }>
        <div className={ styles.header }></div>
        <Switch>
          { RouteComponents }
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default pageDetail
