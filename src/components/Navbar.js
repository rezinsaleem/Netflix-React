import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import profile_img from '../assets/profile_img.png'
import bell_icon from '../assets/bell_icon.svg'
import dropdown_icon from '../assets/caret_icon.svg'

const Navbar = () => {

  const navRef = useRef();

  const handleScroll =()=>{
    if(window.scrollY >=100){
      navRef.current.classList.add('nav-dark')
    }else{
      navRef.current.classList.remove('nav-dark')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  return (
    <div className='navbar' ref={navRef}>
      <div className='navbar-left'>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt="" className='icons'/>
        <p>children</p>
        <img src={bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile'/>
        <img src={dropdown_icon} alt="" />    
        <div className="dropdown">
          <p>Sign Out of Netflix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar