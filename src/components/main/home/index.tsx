import React from 'react'
import branch from '../../../assets/images/branch.png'
import dandelion from '../../../assets/images/dandelion.png'
import style from './styles.module.scss'

const Home: React.FC = () => {
  return (
    <div className={style.home}>
      <h1 className={style.home_title}>Diamaint</h1>
      <div className={style.home_wrap_subtitle}>
        <p className={style.home_subtitle}>
          Натуральная косметика с привкусом Ирландии
        </p>
        <p className={style.home_text}>
          Ингридиенты контролируются по качеству и происхождению. Большинство из
          них имеют органический сертификат Ecoсert и Soil Association.
          Сочетание компонентов в каждой линейке подобрано с учетом особенностей
          типа кожи.
        </p>
      </div>
      <div className={style.home_wrapper}>
        <p className={style.home_text}>
          Diamaint — <span className={style.home_text_span}>одуванчик</span> в переводе с ирландского
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
        <button type="button" className={style.home_button}>
          Выбрать продукт
        </button>
        <p className={style.home_text}>
          В основе — активные натуральные комплексы, витамины С, А, РР, В И Е,
          масла, воски, минералы и натуральные солнцезащитные компоненты.
        </p>
      </div>
      <div className={style.home_holder}>
        <p className={style.home_text_desc}>*<br/>Подбираем<br/> комплекс<br/> специально<br/> для вашего<br/> типа кожи</p>
        <p className={style.home_text_desc_last}>Diamaint — только натуральные ингридиенты</p>
      </div>
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
