import React from 'react'

const Heading = ({Heading="heading",Description="description"}) => {
  return (
    <div>
      <h1>{Heading}</h1>
      <p>{Description}</p>
    </div>
  )
}

export default Heading
