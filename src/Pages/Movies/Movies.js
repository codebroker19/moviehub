import { useState,useEffect } from "react";
import React from "react";
import axios from "axios";
import Usegenre from "../../Hooks/Usegenre";
import "./Movies.css";
import Genres from "../../components/Genres/Genres";
import Display from "../../components/Display/Display";
import Moviedisplay from "./Moviedisplay";
import "./Moviedisplay.css";
import { makeStyles } from '@material-ui/core/styles';
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const Movies = () => {
    
    const [page,setPage]=useState(1);
    const[movies,setmovies]= useState([]);
    const[genres,setgenres]= useState([]);
    const[chosengenres,setchosengenres]=useState([]);
    const [numPages, setNumOfPages] = useState([]);
    const genreforURL=Usegenre(chosengenres);
    const getmovies=async()=> {const { data }=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
setmovies(data.results);
setNumOfPages(data.total_pages);

    };
    
useEffect(() => {
    window.scroll(0,0);
    getmovies();
    // eslint-disable-next-line
}, [genreforURL,page]);
    return (
        <div>
         {<Genres setPage={setPage} type="movie" genres={genres} setgenres={setgenres} chosengenres={chosengenres} setchosengenres={setchosengenres}/> }  
        <div className="hot"> 
         
             {movies && movies.map((event) => 
             <Moviedisplay overview= {event.overview} key={event.id} id={event.id} poster={event.poster_path}  vote_average={event.vote_average}/>)
             
         }
        </div>
       {numPages>1&&(<CustomPagination setPage={setPage} numPages={numPages}/>)}
        
     </div>
    )
}

export default Movies;
