import React from 'react'
import { Link } from 'react-router-dom';
//styles
//import workpic from "../assets/Works/Rectangle 30.svg"
import Calc from "../assets/Works/ReactCalc.png"
import ecomerce from "../assets/Works/ecomerce.png"
import todo from "../assets/Works/todoApp.png"
import "../styles/Works.scss"
import useGetProjectList from '../hooks/useGetProjectList';

const Works = ({project}) => {

  const {projectList, projectDetails, handleDetails} = useGetProjectList();

  const renderImg = (id)=>{
    switch(id){
      case 1:
        return <img src={Calc} alt="image of the project" />
        break;
      case 2:
        return <img src={ecomerce} alt="image of the project" />
        break;  
      case 3:
        return <img src={todo} alt="image of the project" />
        break;   
    }
  }


  return (
    <div className='Works'>
         
        
         
         {renderImg(project.id)} 
        
        <p className='Works_title'>{project.name}</p>
        
        <div className='Works-labels'>
            <span>{project.year}</span>
            <span>React.Js App</span>
            
         

            <span className='Site-link'><a href={project.url}>Visit my site!</a></span>
        </div>
        
        <p className='Works_description'>{project.description}</p>

        {/* <Link onClick={ () => handleDetails(project) } to={"/Projects_Details"}>Show Details</Link> */}
        

        <i className="fa-thin fa-horizontal-rule Works-line-icon" />
        
    </div>
    
  )
}

export default Works