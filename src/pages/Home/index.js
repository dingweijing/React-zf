import React from 'react'
// 导入路由
import { Route } from 'react-router-dom'
// 导入 TabBar
import { TabBar } from 'antd-mobile'

import Index from '../Index'

// 导入组件自己的样式文件
import './index.css'

// TabBar 数据
const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }
]

export default class Home extends React.Component {

  state={
    selectedTab:this.props.location.pathname
  }

//  TarBarItem

  renderTabBarItem (){
    return  tabItems.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`}/>}
        selectedIcon={<i className={`iconfont ${item.icon}`}/>}
        selected={this.state.selectedTab === item.path}
        onPress={()=>{
          this.setState({
            selectedTab:item.path
          })
          //路由切换
          this.props.history.push(item.path)
        }}
      />
    ))
  }


  render () {
    return (
      <div className="home">
        <Route path="/home" component={Index}/>
        {/*// citylist*/}

      {/*  TabBar*/}
      <TabBar>
        {this.renderTabBarItem()}
      </TabBar>
      </div>
    )
  }

}









