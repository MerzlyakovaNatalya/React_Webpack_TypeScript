import React, { useState } from 'react'
import { cards } from '../../../helps'
import Cards from '../../cards'
import DiscountSlider from './discount_slider'
import Buttons from '../../main/discount/buttons'
import Description from './description'
import img from '../../../assets/images/branch_2.png'
import style from './styles.module.scss'

const Discount: React.FC = () => {
  const [activeButton, setActiveButton] = useState(1)

  const setPrev = () => {
    if (activeButton > 1) setActiveButton(activeButton - 1)
    return activeButton
  }

  const setNext = () => {
    if(activeButton < 5) setActiveButton(activeButton + 1)
    return activeButton
  }
  return (
    <div className={style.discount} id='discount'>
      <div className={style.discount_wrap}>
        <div className={style.discount_inner}>
          <Description />
          <Buttons active={activeButton} prev={setPrev} next={setNext}/>
        </div>
        <DiscountSlider active={activeButton}/>
      </div>
      <Cards cardsProduct={cards} />
      <img src={img} alt="branch" className={style.discount_img} />
    </div>
  )
}

export default Discount
