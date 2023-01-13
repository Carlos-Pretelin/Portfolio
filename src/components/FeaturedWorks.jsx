import React from 'react'
import Works from './Works'
import "../styles/FeaturedWorks.scss"
import useInitialState from '../hooks/useInitialState'


const FeaturedWorks = () => {

  const {state} = useInitialState();
  //console.log(state[0])
  
  return (
    <section className='FeaturedWorks'>
        <p className='FeaturedWorks_title'> <i className="fa-solid fa-star"></i> Featured Works</p>
        
        {state.map( (project) => (
          <Works project={project}  key={project.id}/>
        ))}
       
    </section>
  )
}

export default FeaturedWorks