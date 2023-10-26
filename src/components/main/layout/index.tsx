import React from 'react'
import Home from '../home'
import SliderMicroFrontend from '../slider'
import Discount from '../discount'
import Recommendations from '../recommendations'
import Author from '../author'
import Cup from '../cup'
import style from './styles.module.scss'

const Layout: React.FC = () => {
  return <>
  <Home/>
  <Cup/>
  <SliderMicroFrontend/>
  <Discount/>
  <Recommendations/>
  <Author/>
  </>
}

export default Layout