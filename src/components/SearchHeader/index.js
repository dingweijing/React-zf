import React from 'react'

import './index.scss'
import { Flex } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

function SearchHeader ({ history, cityName, className }) {
  return (
    <Flex className={['search-box', className || ''].join(' ')}>
      {/*  左侧*/}
      <Flex className='search'>
        <div className='location' onClick={() => history.push('/citylist')}>
          <span className="name">{cityName}</span>
          <i className="iconfont icon-arrow"/>
        </div>
        {/*  中间搜索表单*/}
        <div className="form" onClick={() => history.push('/search')}>
          <i className="iconfont icon-seach"/>
          <span className="text">请输入小区名称或地址</span>
        </div>
      </Flex>

      {/*  右侧*/}
      <i className="iconfont icon-map" onClick={() => history.push('/map')}/>
    </Flex>
  )
}

// history  location  match .... 丢失  ----->   HOC  高阶函数  withRouter()

// propTypes校验

SearchHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default withRouter(SearchHeader)











