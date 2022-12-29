import React from 'react'
import useInitialState from '../hooks/useInitialState'

//styles
//import workpic from "../assets/Works/Rectangle 30.svg"
import Calc from "../assets/Works/ReactCalc.png"
import ecomerce from "../assets/Works/ecomerce.png"
import todo from "../assets/Works/todoApp.png"
import "../styles/Works.scss"

const Works = ({project}) => {

  const {state} = useInitialState();
  return (
    <div className='Works'>
         {/* <img src={workpic} alt="" /> */}
         {project.id === 1 ? <img src={Calc} alt="image of the project" /> :null }
         {project.id === 2 ? <img src={ecomerce} alt="image of the project" /> :null }
         {project.id === 3 ? <img src={todo} alt="image of the project" /> :null }

        <p className='Works_title'>{project.name}</p>
        
        <div className='Works-labels'>
            <span>2020</span>
            <span><a href={project.url}>Visit my site!</a></span>
        </div>
        
        <p className='Works_description'>{project.description}</p>
        <i className="fa-thin fa-horizontal-rule Works-line-icon" />
    </div>
    
  )
}

export default Works