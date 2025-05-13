import React from 'react'
import PortfolioImage from './podcomponents/PortfolioImage'
import imgStud from '../images/portfolio/11.jpg'
import PriceEl from './podcomponents/PriceEl'
import imgStr from '../images/portfolio/12.jpg'
import imgCon from '../images/portfolio/13.jpg'
import imgCom from '../images/portfolio/14.jpg'
import { Link } from 'react-router-dom'

const Prices = () => {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
        <h1 className='mt-2 col-span-2 text-center text-3xl font-bold md:col-span-4'>Цены на фотосессии</h1>
    <PriceEl name={"Студийная фотосессия"} price={"3000₽/час + оплата студии"} src={imgStud}/>
    <PriceEl name={"Уличная фотосессия"} price={"2000₽/час"} src={imgStr}/>
    <PriceEl name={"Концертная фотография"} price={"3000₽/час"} src={imgCon}/>
    <PriceEl name={"Абстрактная фотография"} price={"200₽/час"} src={imgCom}/>
    <p className='text-center text-xl col-span-2 md:col-span-4 mt-4'>
        Чтобы провести со мной фотосессию, <Link className='hover:text-gray-500 underline font-bold underline-offset-4' to={'/contacts'}><span onClick={() => window.scrollTo({ top: 0, })}>напиши мне</span></Link>!
        </p>
    </div>
  )
}

export default Prices
