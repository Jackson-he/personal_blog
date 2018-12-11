import React, { Component } from 'react';
import styles from './index.scss'

class HomePage extends Component {
  state = {

  }
  componentWillMount () {
    console.log(999)
  }
  toDetail = (id) => {
    this.props.history.push(`/home/page/${id}/detail`)
  }
  render () {
    const contentList = [
      { id: 1, title: "you don't konw js", createTime: '2018-2-1', contentToShow: 'blablabla'},
      { id: 2, title: "you konw js", createTime: '2018-3-1', contentToShow: 'blablabla'},
      { id: 3, title: "you konw js", createTime: '2018-3-1', contentToShow: 'blablabla'},
      { id: 4, title: "you konw js", createTime: '2018-3-1', contentToShow: 'blablabla'},
      { id: 5, title: "you konw js", createTime: '2018-3-1', contentToShow: 'blablabla'},
      { id: 6, title: "you konw js", createTime: '2018-3-1', contentToShow: 'blablabla'},
    ]
    const contentArea = contentList.map((item, index) => {
      return (
        <div className={ styles['content-item']} key={ index } onClick={ this.toDetail.bind(this, item.id) }>
          <div className={ styles.title }>{ item.title }</div>
          <div className={ styles.specification }>创建日期：{ item.createTime }</div>
          <div>{ item.contentToShow }</div>
        </div>
      )
    })

    return (
      <div className={ styles.content }>
        <div className={ styles.main }>{ contentArea }</div>
        <div className={ styles.index }></div>
      </div>
    )
  }
}

export default HomePage;
