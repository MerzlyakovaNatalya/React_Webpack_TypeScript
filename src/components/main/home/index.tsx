import React from 'react'
import { motion } from 'framer-motion'
import branch from '../../../assets/images/branch.png'
import dandelion from '../../../assets/images/dandelion.png'
import style from './styles.module.scss'

const Home: React.FC = () => {
  return (
    <div className={style.home} id='home'>
      <h1 className={style.home_title}>Diamaint</h1>
      <p className={style.home_subtitle}>
        Натуральная косметика с привкусом Ирландии
      </p>
      <div className={style.home_wrapper}>
        <p className={style.home_text}>
          Diamaint — <span className={style.home_text_span}>одуванчик</span> в
          переводе с ирландского
        </p>
        <p className={style.home_text}>
          Косметика, после которой вы уже никогда не будете прежней и обретёте
          новую жизнь, где наша продукция будет вашим верным спутником и
          помощником
        </p>
        <p className={style.home_text}>
          Используем всю силу природы, а так же новейшие разработки индустрии
          вкупе традиционными ирландскими рецептами для того, чтобы придать
          вашей коже здоровый и цветущий вид
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          type="button"
          className={style.home_button}
        >
          Выбрать продукт
        </motion.button>
        <p className={style.home_text}>
          В основе — активные натуральные комплексы, витамины С, А, РР, В И Е,
          масла, воски, минералы и натуральные солнцезащитные компоненты.
        </p>
      </div>
      <div className={style.home_holder}>
        <p className={style.home_text_desc}>
          *<br />
          Подбираем
          <br /> комплекс
          <br /> специально
          <br /> для вашего
          <br /> типа кожи
        </p>
        <p className={style.home_text_desc_last}>
          Diamaint — только натуральные ингридиенты
        </p>
      </div>
      <p className={`${style.home_text} ${style.home_modifier_text}`}>
        Ингридиенты контролируются по качеству и происхождению.
        <br /> Большинство из них имеют органический сертификат
        <br /> Ecoсert и Soil Association. Сочетание компонентов в каждой
        <br /> линейке подобрано с учетом особенностей типа кожи.
      </p>
      <img src={branch} alt="branch" className={style.home_img_branch} />
      <img
        src={dandelion}
        alt="dandelion"
        className={style.home_img_dandelion}
      />
    </div>
  )
}

export default Home
