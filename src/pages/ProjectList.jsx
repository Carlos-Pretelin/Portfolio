import React from 'react'
import Works from '../components/Works'
import useGetProjectList from '../hooks/useGetProjectList'
//styles
import "../styles/ProjectList.scss"



const Projects = () => {

  const {projectList,} = useGetProjectList();

  return (
    <div className='Project-List'>

      <section className='Project-List-Card'>
        <h1>Checkout My Projects!</h1>
        <p>Please visit my portfolio to view my latest projects and see for yourself the quality of my work</p>
      </section>  
     
      {projectList.map( (project) => (
          <Works project={project}  key={project.id}/>
        ))}
      
    </div>
  )
}

export default Projects