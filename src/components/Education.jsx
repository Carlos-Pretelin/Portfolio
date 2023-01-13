import React from 'react'
import ExperienceBox from './ExperienceBox'
import useEmploymentState from '../hooks/useEmploymentState'
//styles
import "../styles/Education.scss"


const Education = () => {

  const {employmentState} = useEmploymentState();
  console.log(employmentState)
  

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