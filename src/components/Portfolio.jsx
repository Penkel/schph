import React from 'react'
import PortfolioImage from './podcomponents/PortfolioImage'
import ImgA from '../images/portfolio/1.jpg'
import ImgB from '../images/portfolio/2.jpg'
import ImgC from '../images/portfolio/3.jpg'
import ImgD from '../images/portfolio/4.jpg'
import ImgE from '../images/portfolio/9.jpg'
import ImgF from '../images/portfolio/10.jpg'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
       <h1 className='mt-2 col-span-2 text-center text-3xl font-bold'>Моё портфолио</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        <PortfolioImage className=""  src={ImgB}/>
        <PortfolioImage src={ImgC}/>
        <PortfolioImage  className="" src={ImgA}/>
        <PortfolioImage  className="" src={ImgD}/>
        <PortfolioImage  className="" src={ImgE}/>
        <PortfolioImage  className="" src={ImgF}/>
      </div>
      <div>
        <p className='text-center text-xl'>
        Чтобы провести со мной фотосессию, <Link className='hover:text-gray-500 underline font-bold underline-offset-4' to={'/contacts'}><span onClick={() => window.scrollTo({ top: 0, })}>напиши мне</span></Link>!
        </p>
      </div>
    </div>
    )
}

export default Portfolio
