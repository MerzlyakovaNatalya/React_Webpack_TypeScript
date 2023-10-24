import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import img from '../../../../assets/images/jar1_discount.png'
import style from './styles.module.scss'

interface IDiscountSlider {
  active: number
}

const DiscountSlider: React.FC<IDiscountSlider> = ({ active }) => {
  return (
    <div className={style.discount_slider}>
      <div className={style.discount_slider_lower}> для нормальной кожи</div>
      <div className={style.discount_slider_upper}>
        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                x: -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, position: 'absolute' }}
              className={style.discount_slider_wrapper}
            >
              <div className={style.discount_slider_ellipse}>{active}</div>
              <p className={style.discount_slider_text}>
                Invisible symphony — ваша волшебная палочка для борьбы с
                несовершенствами
              </p>
              <p className={style.discount_slider_desc}>
                Сочетая энергию природы и возможности науки восстанавливает вашу
                кожу, помогает регенерации клеток, разглаживает рельеф,
                интенсивно увлажняет надолго.
              </p>
              <img
                src={img}
                alt="product"
                className={style.discount_slider_img}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default DiscountSlider
