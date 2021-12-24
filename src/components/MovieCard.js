import React,{useContext,useState} from "react";
import {AuthContext} from "../context/AuthContext"
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieCard = ({ title, poster_path, overview, vote_average }) => {
  const { currentUser } = useContext(AuthContext);
  const [readMore,setReadMore] = useState(false)

    const setVoteClass =(vote)=>{
        if(vote >=8){
            return "green"
        }else if(vote>=6){
            return "orange"
        }else{
            return "red"
        }
    }
  return (
    <div className="movie">
      <img src={poster_path ? IMG_API + poster_path : defaultImage} alt="" />
      <div className="movie-info">
        <h3>{title}</h3>
        {currentUser ? (
          <span className={` tag  ${setVoteClass(vote_average)}`}>
            {" "}
            {vote_average}
          </span>
        ) : null}
      </div>
      <div className="movie-over">
        <h4>Overview</h4>
        <p> {readMore ? overview :`${overview.substring(0,50)}...`}</p>
        <button className = "btn-show" onClick={()=> setReadMore(!readMore)}>{readMore ? "Show Less" : "Show More" }</button>
      </div>
    </div>
  );
};

export default MovieCard;
