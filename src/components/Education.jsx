import React from 'react'
import ExperienceBox from './ExperienceBox'
//styles
import "../styles/Education.scss"
import useInitialState from '../hooks/useInitialState'


const Education = () => {

  const {employmentState} = useInitialState();
  //console.log(employmentState)
  

  return (
    <section className='Education'>
        <p><i className="fa-solid fa-suitcase"></i> Employment History</p>

        {employmentState.map( (job) =>(
          <ExperienceBox job={job} key={job.id} />
        ))}
        
       
    </section>
  )
}

export default Education