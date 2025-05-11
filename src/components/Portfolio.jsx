import React from 'react'
import PortfolioImage from './podcomponents/PortfolioImage'
import ImgA from '../images/portfolio/1.jpg'
import ImgB from '../images/portfolio/2.jpg'
import ImgC from '../images/portfolio/3.jpg'
import ImgD from '../images/portfolio/4.jpg'

const Portfolio = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
      <PortfolioImage className="col-span-2"  src={ImgB}/>
      <PortfolioImage src={ImgC}/>
      <PortfolioImage  className="col-span-2" src={ImgA}/>
      <PortfolioImage  className="col-span-3" src={ImgD}/>
    </div>
  )
}

export default Portfolio
