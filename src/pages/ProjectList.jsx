import React from 'react'
import Works from '../components/Works'
import useGetProjectList from '../hooks/useGetProjectList'



const Projects = () => {

  const {projectList,} = useGetProjectList();

  return (
    <div>
      <h1>Personal Projects</h1>

      
     
      {projectList.map( (project) => (
          <Works project={project}  key={project.id}/>
        ))}
      
    </div>
  )
}

export default Projects