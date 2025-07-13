import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useEffect, useState } from "react";

function Navbar() {
    function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
    
      const isMobile = useIsMobile();
  return (
    <>
    {isMobile ? (
        <nav className='navbar-mob'>
            <div><h3>UGC Creator</h3></div>
            <div className='lang-button'><LanguageSwitcher/></div>
        </nav>
        ) : (
            <nav className='navbar'>
            <div><h3>UGC Creator</h3></div>
            <div className='lang-button'><LanguageSwitcher/></div>
        </nav>
        )}
        
    </>
  )
}

export default Navbar