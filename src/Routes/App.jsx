import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../containers/Layout'
import Home from "../pages/Home"
import ProjectList from "../pages/ProjectList"
import ProjectsDetails from "../pages/ProjectDetails"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"


//styles
import "../styles/App.scss"

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Projects_List' element={<ProjectList/>}/>
                <Route exact path='/Projects_Details' element={<ProjectsDetails/>}/>
                <Route exact path='/Contact' element={<Contact/>}/>

                <Route exact path='*' element={<NotFound/>} />
            </Routes>
        </Layout>
    </BrowserRouter>
        
    
    

  )
}

export default App