import  productDiscountOne from '../assets/images/productDiscountOne.png'
import  productDiscountTwo from '../assets/images/productDiscountTwo.png'
import  productDiscountThree from '../assets/images/productDiscountThree.png'

export const menu = [{
    id: '#home',
    title: 'О продукте',
}, {
    id: '#',
    title: 'Каталог',
}, {
    id: '#discount',
    title: 'Акции',
}, {
    id: '#recommendations',
    title: 'Полезное'
}, {
    id: '#author',
    title: 'Авторы'
}]

export interface ICard {
    id: number
    discount: number
    widthCard: string
    heightCard: string
    img: string
    description: string
    price: number
    oldPrice: number
    heightDiscount: string
  }

export const cards: ICard[] = [{
    id: 1,
    discount: 5,
    widthCard: '25rem',
    heightCard: '36rem',
    img: productDiscountOne,
    description: 'Приобретая увлажняющий крем и маску, вы получаете скидку 5% на весь товар',
    price: 4750,
    oldPrice: 5000,
    heightDiscount: '3.8rem'
}, {
    id: 2,
    discount: 10,
    widthCard: '25rem',
    heightCard: '38rem',
    img: productDiscountTwo,
    description: 'Приобретая увлажняющий мусс и гель для умывания, вы получаете скидку 10% на весь товар',
    price: 3960,
    oldPrice: 4400,
    heightDiscount: '9rem'
}, {
    id: 3,
    discount: 20,
    widthCard: '25rem',
    heightCard: '40rem',
    img: productDiscountThree,
    description: 'Приобретая весь набор Invisible symphony, вы получаете скидку 20% на весь товар',
    price: 7520,
    oldPrice: 9400,
    heightDiscount: '8.5rem'
}
]