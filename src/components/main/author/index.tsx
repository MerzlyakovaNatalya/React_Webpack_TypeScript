import React from 'react'
import style from './styles.module.scss'

const Author: React.FC = () => {
  return (
    <div className={style.author} id="author">
      <div className={style.author_inner}>
        <h1 className={style.author_title}>Авторы и идеологи</h1>
        <p className={style.author_text_name}>Маша Шестякова</p>
        <p className={style.author_text}>
          Маша — главный идеолог, создатель проекта и по совместительству
          главный добытчик рецептов. Машиной фишкой является бабушка-ирландка,
          бывшая модель с бесконечным запасом проверенных на себе народных
          рецептов.{' '}
        </p>
        <p className={style.author_citation}>
          Мне нравится адаптировать культуру моих предков к современности. Я
          чувствую, что создаю нить между разными эпохами. И то, что мой продукт
          делает девушек красивыми и уверенными в себе, помогает мне чувствовать
          себя счастливой!
        </p>
      </div>
    </div>
  )
}

export default Author
