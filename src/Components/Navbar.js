import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  return (
    <nav className='navbar'>
        <div><h3>UGC Creator</h3></div>
        
        <div className='lang-button'><LanguageSwitcher/></div>
    </nav>
  )
}

export default Navbar