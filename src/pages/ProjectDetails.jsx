import React from 'react'
import useGetProjectList from '../hooks/useGetProjectList'

const ProjectDetails = () => {


    const {projectList, projectDetails, handleDetails} = useGetProjectList();
  return (
    <h1>{console.log(projectDetails)}</h1>
    //<h1>hola</h1>
  )
}

export default ProjectDetails