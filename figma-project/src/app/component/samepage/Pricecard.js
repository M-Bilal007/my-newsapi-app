import React from 'react'

const Pricecard = (title='Heading of card', price='price of card') => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{price}</p>
    </div>
  )
}

export default Pricecard
