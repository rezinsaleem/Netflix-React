import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { IMAGE_URL } from '../utils/constants';
import { Link } from 'react-router-dom';


const TitleCards = ({title,categoryLink}) => {

  const [movies, setMovies] = useState([])

 useEffect(()=>{
  axios.get(categoryLink)
  .then( (response)=> {
    console.log(response.data)
    setMovies(response.data.results);
  })
  .catch((error)=> {
    console.error(error);
  });
 },[]);

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {movies.map((cards,index)=>{
          return <Link to={`/player/${cards.id}`} className='card' key={index}>
            <img src={IMAGE_URL+cards.backdrop_path} alt="" />
            <p>{cards.original_name?cards.original_name:cards.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards