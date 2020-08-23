import React from 'react'

import axios from 'axios'

import { Toast } from 'antd-mobile'

import { List } from 'react-virtualized'

// 获取城市
import { getCurrentCity } from '../../utils'

// NavHeader 组件

import NavHeader from '../../components/NavHeader'

import './index.scss'

const formatCityData = list => {
  const cityList = {}

  list.forEach(item => {
    // 1. 需要拿到城市名的首字母
    //深圳
    const first = item.short.substr(0, 1)
    // 判断cityList中是否有该分类
    if (cityList[first]) {
      //如果有 , 直接往当前分类中push'数据
      cityList[first].push(item)
    } else {
      //如果没有 , 就创建一个 , 存值
      cityList[first] = [item]
    }

  })
return {
    cityList
}
}

//城市列表信息

export default class CityList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      cityList: []
    //  cityIndex 索引值
    }
  }

  async componentDidMount(){
    await this.getCityList()
  }

  async getCityList () {
    const res = await axios.get('http://localhost:8080/area/city?level=1')

    // res.data.body
    //数据格式化处理城市列表

    const { cityList } = formatCityData(res.data.body)

    //热门城市获取
    const hotRes = await axios.get('http://localhost:8080/area/hot')

    cityList['hot'] = hotRes.data.body

    //当前定位城市
    const curCity = await getCurrentCity() //北京
    cityList['#'] = [cityList]

    console.log(curCity)

  }

  render () {
    return (
      <div className="citylist">
        {/*顶部导航栏*/}
        <NavHeader>城市选择</NavHeader>
        {/*  城市列表*/}
        {/*右侧索引列表*/}
      </div>
    )
  }
}







