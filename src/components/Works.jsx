import React from 'react'
import { Link } from 'react-router-dom';
//styles
//import workpic from "../assets/Works/Rectangle 30.svg"
import Calc from "../assets/Works/calculator.png"
import ecomerce from "../assets/Works/E-Comerce App.png"
import todo from "../assets/Works/todoApp.png"
import rick from "../assets/Works/RickMorty.png"
import pconf from "../assets/Works/platziconf.png"
import "../styles/Works.scss"
import useGetProjectList from '../hooks/useGetProjectList';

const Works = ({project}) => {

  const {projectList, projectDetails, handleDetails} = useGetProjectList();


  //To do : Move this to a custom hook
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
      case 4:
        return <img src={rick} alt="image of the project" />
        break;   
      case 5:
        return <img src={pconf} alt="image of the project" />
        break;   
    }
  }


  return (
    <div className='Works'>
         
        
         
         {renderImg(project.id)} 
        
        <p className='Works_title'>{project.name}</p>
        
        <div className='Works-labels'>
            <label>{project.year}</label>
            <label>React.Js</label>
            
         
            <label className='Site-link'><a href={project.github}><i className="fa-brands fa-github"></i> GitHub</a></label>
            <label className='Site-link'><a href={project.url}>Visit my site!</a></label>
            
        </div>
        
        <p className='Works_description'>{project.description}</p>

        {/* <Link onClick={ () => handleDetails(project) } to={"/Projects_Details"}>Show Details</Link> */}
        

        <i className="fa-thin fa-horizontal-rule Works-line-icon" />
        
    </div>
    
  )
}

export default Works