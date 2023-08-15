import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: "Our mission is to provide high-quality, stylish, and affordable furniture options that enhance the living spaces of our customers. We make it our aim to exceed our customer's expectations on every level, from design to delivery, and to stay ahead of trends in the furniture industry.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Our vision is to be recognized as a household name in the furniture industry, known for our commitment to quality, style, and affordability. We believe in building long-lasting relationships with our customers and providing exceptional customer service that goes above and beyond.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: "House Furniture Company was established in 2020 in a small storefront in the heart of downtown. The founder had a passion for furniture design and sought to create a company that offered high-quality, innovative designs that would enhance the ambiance of people's homes.",
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
