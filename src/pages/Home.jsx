import React from 'react'
import Profile from "../components/Profile"
import Education from '../components/Education'
import FeaturedWorks from '../components/FeaturedWorks'

const Home = () => {
  return (
    <div className='Home'>
        <Profile/>
        <Education/>
        <FeaturedWorks/>
    </div>
    
  )
}

export default Home