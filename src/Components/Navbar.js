import React from 'react'
import Home from './Home'
import Courses from './Courses'
import Contact from './Contact'
import Help from './Help'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Home/></li>
            <li><Courses/></li>
            <li><Contact/></li>
            <li><Help/></li>
        </ul>
    </div>
  )
}

export default Navbar