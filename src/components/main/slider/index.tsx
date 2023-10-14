import React from 'react'
import style from './styles.module.scss'

const Users = React.lazy(() => import('MicroFrontendApp/UsersComponent'))

const Slider: React.FC = () => {
  return <div className={style.slider}>
    <Users/>
  </div>
}

export default Slider