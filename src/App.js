//懒加载  延迟加载
import React from 'react'
import CityList from './pages/CityList'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'


function App() {
  return (
    <Router>
        <div className="App">
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/citylist" component={CityList} />
        </div>
    </Router>
  )
}

export default App
