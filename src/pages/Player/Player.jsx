/* eslint-disable react-hooks/exhaustive-deps */
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



export const Player = () => {
  const {id} = useParams();
  const navgate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  // typeof
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI3YWZlOGQ3MmQxMmIxN2Q2ZjA0OTRjZDUxMzlkZiIsIm5iZiI6MTcyNzAzNjI2NC44ODg2MDMsInN1YiI6IjY2ZWFmN2E0MWJlY2E4Y2UwN2QzOTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-CU6SmyJ03aaDLpfufg0YQ7FjU3ClfPhMOhDPFKXt10'
    }
  };

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));  
  },[])

  
  return (
    <div className="player">
      <img onClick={() => navgate(-2)} src={back_arrow_icon} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}title="trailer" frameBorder="0" allowFullScreen width="90%" height="90%" ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}
export default Player