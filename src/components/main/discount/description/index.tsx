import React from 'react'
import style from './styles.module.scss'


const Description: React.FC = () => {
  return (
    <div className={style.description}>
      <h1 className={style.description_title}>Акции</h1>
      <p className={style.description_text}>
        Каждый месяц мы отбираем специальную линейку продуктов, которая нравится
        вам и снижаем цены!
      </p>
    </div>
  )
}

export default React.memo(Description)
