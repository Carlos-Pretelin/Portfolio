import React from 'react'
import Works from './Works'
import "../styles/FeaturedWorks.scss"


const FeaturedWorks = () => {
  return (
    <section className='FeaturedWorks'>
        <p className='FeaturedWorks_title'>Fetured Works</p>
        <Works/>
        <Works/>
        <Works/>
       
    </section>
  )
}

export default FeaturedWorks