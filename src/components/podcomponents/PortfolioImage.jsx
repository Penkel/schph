import React from 'react'


const PortfolioImage = ({
    src
}) => {
    return (
    <div className='overflow-hidden'>
      <img className='w-full h-auto object-cover cursor-pointer hover:scale-105 hover:brightness-75 transition-all duration-300 ' src={src} alt="portfolio image" />
    </div>
  )
}

export default PortfolioImage
