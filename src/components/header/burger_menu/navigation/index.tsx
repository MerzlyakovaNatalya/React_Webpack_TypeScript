import * as React from 'react'
import { motion } from 'framer-motion'
import { menu } from '../../../../helps'
import MenuItem from '../menu_item'
import style from './styles.module.scss'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = () => (
  <motion.ul variants={variants} className={style.navigation_ul}>
    {menu.map((i, index) => (
      <MenuItem i={i.title} key={index} />
    ))}
  </motion.ul>
)

export default Navigation
