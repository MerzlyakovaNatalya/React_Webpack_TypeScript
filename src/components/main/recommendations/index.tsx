import React from 'react'
import img from '../../../assets/images/purple_dandelion.png'
import style from './styles.module.scss'

const Recommendations: React.FC = () => {
  return (
    <div className={style.recommendations_wrapper} id="recommendations">
      <div className={style.recommendations}>
        <h1 className={style.recommendations_title}>Diamaint</h1>
        <img
          src={img}
          alt="dandelion"
          className={style.recommendations_img_purple_dandelion}
        />
        <div className={style.recommendations_content}>
          <div className={style.recommendations_inner}>
            <p className={style.recommendations_subtitle}>
              Протестировали и довольны результатом
            </p>
            <p className={style.recommendations_number}>6800</p>
            <p className={style.recommendations_woman}>женщин</p>
            <p className={style.recommendations_text}>
              96% женщин заметили положительный результат уже после недели
              использования линейки средств. Кожа стала более ухоженной,
              увлажненной и напитанной. Исчезли или значительно уменьшились
              воспаления. А приятный аромат и легкая текстура стали отличным
              дополнением с утренне-вечерним ритуалам ухода
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations
