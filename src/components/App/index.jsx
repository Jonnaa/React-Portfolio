import './styles.css'
import HomePage from '../HomePage';
import AboutMePage from '../AboutMePage';
import ProjectsPage from '../ProjectsPage';
import ContactMe from '../ContactMe';
import { Routes, Route, Link } from "react-router-dom";

export default function App() {

  return (
    <>
    {/* Nav Bar */}
      <div>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutMePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>

      <ContactMe/>
    </>
  )
}
