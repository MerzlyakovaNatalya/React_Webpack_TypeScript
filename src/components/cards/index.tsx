import React from 'react'
import { ICard } from '../../helps'
import Card from '../card'
import { motion } from 'framer-motion'
import style from './styles.module.scss'

const cardAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.3}
  }),
}

interface CardsProps {
  cardsProduct: ICard[]
}

const Cards: React.FC<CardsProps> = ({ cardsProduct }) => {
  return (
    <motion.div 
    initial="hidden" 
    whileInView="visible" 
    viewport={{amount: 0.3, once: true}}
    className={style.cards}>
      {cardsProduct.map((card, index) => (
        <motion.div custom={index + 2} variants={cardAnimation} key={card.id}>
          <Card
            id={card.id}
            discount={card.discount}
            widthCard={card.widthCard}
            heightCard={card.heightCard}
            img={card.img}
            description={card.description}
            price={card.price}
            oldPrice={card.oldPrice}
            heightDiscount={card.heightDiscount}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default React.memo(Cards)
