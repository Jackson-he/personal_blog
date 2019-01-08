import React, { Component } from 'react';
import styles from './header.scss';

class Header extends Component {
  render () {
    return (
      <div className={ styles.header }>
        <div className={ styles['head-left'] }>大河之剑天上来</div>
        <div className={ styles['head-right'] }></div>
      </div>
    )
  }
}

export default Header
