import React, { useState } from 'react'
import style from './styles.module.scss'

const Slider = React.lazy(() => import('MicroFrontendSlider/SliderComponent'))

const SliderMicroFrontend: React.FC = () => {
  return (
    <div className={style.slider_micro_frontend}>
      <Slider />
    </div>
  )
  return <div />
}

export default SliderMicroFrontend
