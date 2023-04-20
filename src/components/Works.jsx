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

const Works = ({project}) => {




  //To do : Move this to a custom hook
  //ideally every element should have its own image url, but for now this will do
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
            
         
            
            
        </div>
        
        <p className='Works_description'>{project.description}</p>

        <div className='Works-Sites'>
          <a href={project.github}><i className="fa-brands fa-github"></i> GitHub</a>
          <a href={project.url}>Visit my site!</a>
        </div>

        {/* <Link onClick={ () => handleDetails(project) } to={"/Projects_Details"}>Show Details</Link> */}
        

        
        
    </div>
    
  )
}

export default Works