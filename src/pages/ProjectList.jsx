import React from 'react'
import Works from '../components/Works'
import useGetProjectList from '../hooks/useGetProjectList'
//styles
import "../styles/ProjectList.scss"



const Projects = () => {

  const {projectList,} = useGetProjectList();

  return (
    <div className='Project-List'>
      <h1>Personal Projects</h1>

      
     
      {projectList.map( (project) => (
          <Works project={project}  key={project.id}/>
        ))}
      
    </div>
  )
}

export default Projects