import React, { useRef, useEffect, useState } from 'react'
import logo from '../../assets/icons/logo.svg'
import Basket from '../../assets/icons/basket'
import BurgerMenu from './burger_menu'
import { menu } from '../../helps'
import style from './styles.module.scss'

const Header: React.FC = () => {
  const [widthDiv, setWidthDiv] = useState('66')
  const refHeader = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (refHeader.current) {
      const width = refHeader.current.offsetWidth
      if(width <= 1440) setWidthDiv('40')
      if(width <= 1024) setWidthDiv('30')
    }
  }, [refHeader])
  return (
    <div className={style.header} ref={refHeader}>
      <div className={style.header_wrap_menu}>
        <img src={logo} alt="logo" className={style.header_svg} />
        {menu.map((item, index) => (
          <a href={item.id} className={style.header_link} key={index}>
            {item.title}
          </a>
        ))}
      </div>
      <Basket width={widthDiv} />
      <BurgerMenu/>
    </div>
  )
}

export default Header
