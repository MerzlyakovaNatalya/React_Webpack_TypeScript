import React from 'react'
import IconButton from '../icon_button'
import style from './styles.module.scss'

interface IButtons {
  active: number
  prev: () => number
  next: () => number
}

const Buttons: React.FC<IButtons> = ({active, prev, next}) => {
  return (
    <div className={style.buttons}>
      <IconButton direction='left' disable={active === 1} click={prev}/>
      <IconButton direction='right' disable={active === 5} click={next}/>
    </div>
  )
}

export default Buttons