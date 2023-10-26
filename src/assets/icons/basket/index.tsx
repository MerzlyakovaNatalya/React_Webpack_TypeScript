import React from 'react'
import style from './styles.module.scss'

interface BasketValue {
  width: string
}

const Basket: React.FC<BasketValue> = (props: BasketValue) => {
  return (
    <div className={style.basket}>
      <svg
        width={props.width}
        height="60"
        viewBox="0 0 66 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="30" fill="white" />
        <circle cx="55.5" cy="10.5" r="10.5" fill="#757AA5" />
        {/* <path d="M57.004 6.2V16H55.184V7.726H53.112V6.2H57.004Z" fill="white" /> */}
        <path
          d="M40 41.0768H20L21.5385 24.3845H38.6154L40 41.0768Z"
          stroke="#373737"
          strokeWidth="1.46154"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.8462 27.7692C25.8462 27.7692 25.8462 21.7692 25.8462 20.5385C25.8462 19.3077 27.077 17 30 17C32.7693 17 34.1539 19.3846 34.1539 20.5385C34.1539 21.5231 34.1539 25.7692 34.1539 27.7692"
          stroke="#373737"
          strokeWidth="1.46154"
        />
        <circle cx="34.1537" cy="27.6154" r="1.69231" fill="#373737" />
        <circle cx="25.8461" cy="27.6154" r="1.69231" fill="#373737" />
        <text
          x="52.5"
          y="13.5"
          fill="white"
          style={{ fontWeight: 'bold', fontSize: 12 }}
        >
          2
        </text>
      </svg>
    </div>
  )
}

export default Basket
