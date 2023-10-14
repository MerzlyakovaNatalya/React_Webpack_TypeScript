import React from 'react'
import Home from '../home'
import Slider from '../slider'
import Discount from '../discount'
import Recommendations from '../recommendations'
import Author from '../author'
import style from './styles.module.scss'

const Layout: React.FC = () => {
  return <>
  <Home/>
  <Slider/>
  <Discount/>
  <Recommendations/>
  <Author/>
  </>
}

export default Layout