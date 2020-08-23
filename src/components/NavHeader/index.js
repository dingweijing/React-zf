import React from 'react'

// NavBar

import { NavBar } from 'antd-mobile'

import propTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

// 导入css对象

import styles from './index.module.css'

function NavHeader ({ history, children, className, onLeftClick, rightContent }) {

  //默认返回行为
  const defaultHandler = () => {
    history.go(-1)
  }

  return (
    <NavBar
      className={[styles.navBar, className || ''].join(' ')}
      mode="light"
      icon={<i className="iconfont icon-back"/>}
      onLeftClick={onLeftClick || defaultHandler}
      rightContent={rightContent}
    >
      {children}
    </NavBar>
  )
}

NavHeader.propTypes = {
  children: propTypes.string.isRequired,
  onLeftClick: propTypes.func,
  className: propTypes.string,
  rightContent: propTypes.array
}


export default withRouter(NavHeader)
