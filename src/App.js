import './App.css';
 import {NavLink, Route, Routes } from 'react-router-dom';
 import Contact from './Components/Contact';
 import Courses from './Components/Courses';
 import Help from './Components/Help';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">


      
      <ul>
        <li > <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/help">Help</NavLink> </li>
        <li> <NavLink to="/contact">Contact</NavLink> </li>
        <li> <NavLink to="/courses">Courses</NavLink> </li>
      </ul>

     <Routes>
      <Route path='/' element={<Navbar/> } />
      <Route path='/help' element={<Help/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path='*' element={<div>Page not found
        </div>} />
      
     </Routes>
    </div>
  );
}

export default App;
