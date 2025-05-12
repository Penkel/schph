import React from 'react'
import PortfolioImage from './podcomponents/PortfolioImage'
import ImgA from '../images/portfolio/1.jpg'
import ImgB from '../images/portfolio/2.jpg'
import ImgC from '../images/portfolio/3.jpg'
import ImgD from '../images/portfolio/4.jpg'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        <PortfolioImage className="col-span-2"  src={ImgB}/>
        <PortfolioImage src={ImgC}/>
        <PortfolioImage  className="col-span-2" src={ImgA}/>
        <PortfolioImage  className="col-span-3" src={ImgD}/>
      </div>
      <div>
        <p className='text-center text-xl'>
        Чтобы провести со мной фотосессию, <Link className='hover:text-gray-500 underline font-bold underline-offset-4' to={'/contacts'}>напиши мне</Link>!
        </p>
      </div>
    </div>
    )
}

export default Portfolio
