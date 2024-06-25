import React from 'react'
import Navbar from '../components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import { ACTION_URL, COMEDY_URL, HORROR_URL, NETFLIX_ORIG, TRENDING_URL } from "../utils/constants";
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'> 
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="banner" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <Link to={'/player/12321'}><button className='btn'><img src={play_icon} alt="" />Play</button></Link>
            <button className='btn btn-dark'><img src={info_icon} alt="" />Info</button>
          </div>
          <TitleCards categoryLink={NETFLIX_ORIG}/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} categoryLink={ACTION_URL}/>
      <TitleCards title={"Only on Netflix"} categoryLink={TRENDING_URL}/>
      <TitleCards title={"Upcoming"} categoryLink={HORROR_URL}/>
      <TitleCards title={"Top pics for You"} categoryLink={COMEDY_URL}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home