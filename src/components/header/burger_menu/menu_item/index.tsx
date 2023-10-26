import * as React from 'react'
import { motion } from 'framer-motion'
import style from './styles.module.scss'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem = ({ i }: any) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={style.li}
    >
      <div className={style.icon_placeholder} />
      <div className={style.text_placeholder}>
        <a href={i.id}>{i}</a></div>
    </motion.li>
  )
}

export default MenuItem
