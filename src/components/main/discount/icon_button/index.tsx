import React from 'react'
import style from './styles.module.scss'

interface IIconButton {
  direction: string
  disable: boolean
  click: () => number
}

const IconButton: React.FC<IIconButton> = ({ direction, disable, click }) => {
  let cls = `${style.icon_button}`

  if (direction === 'left') cls = `${cls} ${style.left}`
  if (direction === 'right') cls = `${cls} ${style.right}`
  if (disable) cls = `${cls} ${style.disable}`

  return <div className={cls} onClick={() => click()}></div>
}

export default React.memo(IconButton)
