/* eslint-disable react/prop-types */
import "./TitleCard.css";
// import cards_data from "../../assets/cards/Cards_data.js";

import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const TitleCard = ({title, category}) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef(null);
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDI3YWZlOGQ3MmQxMmIxN2Q2ZjA0OTRjZDUxMzlkZiIsIm5iZiI6MTcyNzAzNjI2NC44ODg2MDMsInN1YiI6IjY2ZWFmN2E0MWJlY2E4Y2UwN2QzOTA5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-CU6SmyJ03aaDLpfufg0YQ7FjU3ClfPhMOhDPFKXt10'
    }
  };
  


  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titleCards">
      <h2>{title ? title : "Popuar on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default TitleCard;
