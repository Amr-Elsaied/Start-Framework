import { NavLink ,Link } from "react-router-dom";
import { useState, useEffect } from 'react';

NavLink

export default function Navbar() {
  const [scrolled, setscrolled] = useState(false);

useEffect(() => {
    const scroll = () => {
      
      if (window.scrollY > 50) {
        setscrolled(true); 
      } else {
        setscrolled(false); 
      }
    };
    window.addEventListener('scroll', scroll);
return () => {
      window.removeEventListener('scroll', scroll);
    };
}, []); 






  return (
    <>
    <nav className={`navbar navbar-expand-lg mainColor ${scrolled ? 'py-2' : 'py-4'} fixed-top`} data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand fs-2 fw-bold" to={''}>START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center me-3" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto justify-content-between mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fs-6 fw-bold text-white " aria-current="page" to={'/about'}>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-6 fw-bold text-white ms-lg-3 " to={'/portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-6 fw-bold text-white ms-lg-3 " to={'/contact'}>CONTACT</NavLink>
        </li>
        <li className="nav-item dropdown">
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
