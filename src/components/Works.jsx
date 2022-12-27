import React from 'react'
//styles
import workpic from "../assets/Works/Rectangle 30.svg"
import "../styles/Works.scss"

const Works = () => {
  return (
    <div className='Works'>
         <img src={workpic} alt="" />
        <p className='Works_title'>Designing Dashboards</p>
        <span>2020  Dashboard</span>
        <p className='Works_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam pariatur molestias molestiae obcaecati quaerat id 
            laborum sunt nisi adipisci iure quis commodi maxime aliquid, distinctio eum sed ab et!</p>
    </div>
  )
}

export default Works