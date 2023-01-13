import React from 'react'
import "../styles/ExperienceBox.scss"

const ExperienceBox = ({job}) => {
  return (
    <div className='ExperienceBox '>
        <h2>{job.title}</h2>
        <span>{job.date}</span>
        <p>{job.description}</p>
    </div>
  )
}

export default ExperienceBox