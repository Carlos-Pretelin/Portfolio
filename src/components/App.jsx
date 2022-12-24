import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../containers/Layout'
import Home from "./Home"
import Projects from "./Projects"
import Contact from "./Contact"
import NotFound from "./NotFound"


//styles
import "../styles/App.scss"

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Projects' element={<Projects/>}/>
                <Route exact path='/Contact' element={<Contact/>}/>

                <Route exact path='*' element={<NotFound/>} />
            </Routes>
        </Layout>
    </BrowserRouter>
        
    
    

  )
}

export default App