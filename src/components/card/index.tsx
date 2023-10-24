import React from 'react'
import basket from '../../assets/icons/basketImg.svg'
import { ICard } from '../../helps'
import style from './styles.module.scss'

const Card: React.FC<ICard> = ({
  widthCard,
  heightCard,
  img,
  description,
  price,
  discount,
  oldPrice,
  heightDiscount
}) => {
  return <div className={style.card} style={{width: widthCard, height: heightCard}}>
    <div className={style.card_header} style={{height: heightDiscount}}>
        <p className={style.card_text_discount}>Скидка {discount}%</p>
    </div>
    <div className={style.card_wrap}>
        <img src={img} className={style.card_img} alt="Фото товара"/>
        <p className={style.card_description}>{description}</p>
        <div className={style.card_wrap_price}>
        <p className={style.card_old_price}>{oldPrice}</p>
        <p className={style.card_new_price}>{price}</p>
        <img src={basket} alt='корзина' className={style.card_basket}/>
        </div>
    </div>
  </div>
}

export default Card
