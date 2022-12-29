import React from 'react'
//styles
import workpic from "../assets/Works/Rectangle 30.svg"
import "../styles/Works.scss"

const Works = () => {
  return (
    <div className='Works'>
         <img src={workpic} alt="" />
        <p className='Works_title'>Designing Dashboards</p>
        <div className='Works-labels'>
            <span>2020</span>
            <span>Dashboard</span>
        </div>
        
        <p className='Works_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam pariatur molestias molestiae obcaecati quaerat</p>
        <i className="fa-thin fa-horizontal-rule Works-line-icon" />
    </div>
    
  )
}

export default Works