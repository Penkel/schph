import React from 'react'
import PortfolioImage from './PortfolioImage'

const PriceEl = ({
    name, price, src
}) => {
  return (
    <div className='grid grid-cols-1 place-items-center'>
        <h2 className='my-2 font-bold text-xl text-center'>{name}</h2>
        <p>{price}</p>
        <PortfolioImage src={src} />
        
    </div>
  )
}

export default PriceEl
