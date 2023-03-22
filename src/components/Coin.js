import React from 'react'

const Coin = ({name, icon, price, priceChange1d, priceChange1h, priceChange1w, totalSupply, symbol}) => {
  return (
    <div className='coin'>
        <h1>Name:{name} </h1>
        <img src={icon}/>
        <h3>Price: {price}</h3>
        <h3 className='hour'>Last 1 Hour: {priceChange1h}%</h3>
        <h3 className='day'>Last 1 Day: {priceChange1d}%</h3>
        <h3 className='symbol'>Symbol: {symbol}</h3>

    </div>
  )
}

export default Coin

