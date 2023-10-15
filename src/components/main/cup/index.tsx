import React from 'react'
import cup from '../../../assets/images/cup.png'
import style from './styles.module.scss'

const Cup: React.FC = () => {
  return (
    <div className={style.cup}>
      <div className={style.cup_wrap}>
        <img src={cup} alt="чашка" className={style.cup_img} />
      </div>
    </div>
  )
}

export default Cup
