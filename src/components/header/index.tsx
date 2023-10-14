import React from 'react'
import logo from '../../assets/icons/logo.svg'
import Basket from '../../assets/icons/basket'
import { menu } from '../../helps'
import style from './styles.module.scss'

const Header: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.header_wrap_menu}>
      <img src={logo} alt="logo" className={style.header_svg}/>
        {menu.map((item, index) => (
          <a href='#' className={style.header_link} key={index}>
            {item}
          </a>
        ))}
      </div>
      <Basket />
    </div>
  )
}

export default Header
