import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import netflix_spinner from '../assets/netflix_spinner.gif'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
 
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`movie/${id}/videos`, {
      params: {
        language: 'en-US',
        page: '1'
      }
    })
    .then((response) => {
      if (response.data.results && response.data.results.length > 0) {
        setApiData(response.data.results[0]);
      }
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });
}, [id]);

if (loading) {
  return <img style={{marginLeft:'650px',marginTop:'150px'}} src={netflix_spinner} alt="" />;
}

if (!apiData.key) {
  return <div className='errorRoute'><h1>No video available.</h1></div>;
}
  return (
    <div className='player'>
    <img src={back_arrow_icon} alt="Back" onClick={() => {
        console.log('Back arrow clicked');
        navigate(-1); 
      }} />
    <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder="0" allowFullScreen>
    </iframe>
    <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    </div>
    </div>
  )
}

export default Player