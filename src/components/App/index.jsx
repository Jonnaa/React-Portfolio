import './styles.css'
import HomePage from '../HomePage';
import AboutMePage from '../AboutMePage';
import ProjectsPage from '../ProjectsPage';
import ContactMe from '../ContactMe';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';

export default function App() {
  const [burgerHidden, setBurgerHidden]= useState(true)

  function toggleBurger(){
    setBurgerHidden(!burgerHidden)
  }
  return (
    <div className='mainDiv'>
      
      {/* Nav Bar */}
      <div className='navBar'>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
      {/* Burger nav bar */}
      <div className='navBarBurger'>
        <button onClick={toggleBurger}><img src="icons/burger-bar.png" alt="" className='burger'/></button>
      </div>
      {burgerHidden?<></>:
        <>
          <div className="burgerLinks">
            <Link to="/" onClick={toggleBurger} className='burgerLink homeLink'>Home Page</Link>
            <Link to="/about" onClick={toggleBurger} className='burgerLink aboutLink'>About Me</Link>
            <Link to="/projects" onClick={toggleBurger} className='burgerLink'>Projects</Link>
          </div>
        </>
      }
      
      {/* "Pages" div */}
      <div className='routeDiv'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutMePage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
      </div>

      {/* Footer (contact info) */}
      <div className='footer'>
        <ContactMe/>
      </div>
    </div>
  )
}
