import React from 'react'
import style from './styles.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_inner}>
        <p className={style.footer_text}>Контакты</p>
        <p className={style.footer_contacts}>
          +7 495 550 50 50<br/> Москва, Пресенеский Вал 21
        </p>
      </div>
    </div>
  )
}

export default Footer
