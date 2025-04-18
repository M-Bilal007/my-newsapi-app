import React from 'react'
import Hero from '../component/samepage/Hero'
import Heading from './Heading'
import Pricecard from '../component/samepage/Pricecard'
import Facility from '../component/samepage/Facility'
import Blackcard from '../component/samepage/Blackcard'
import Footer from '../component/samepage/Footer'
import Button from '../component/samepage/Button'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Heading Heading="Discover NEW Arrivals" Description="Recently added shirts!" />
      <Pricecard title='plain white shirt' price = '$29.00'/>
      <Facility title='Free shiping' Description='description' />
      <Blackcard title='PEACE OF MIND' Description='platform' />
      <Button title="SHOP NOW"/>
    </div>
  )
}

export default Homepage
