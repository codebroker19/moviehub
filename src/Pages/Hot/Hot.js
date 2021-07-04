import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Display from "../../components/Display/Display";
import "./Hot.css";
import { makeStyles } from '@material-ui/core/styles';
import CustomPagination from "../../components/CustomPagination/CustomPagination";


const Hot = () => {
  const [page, setPage] = useState(1);
    const [movies,setmovies]=useState([]);
    
    const gettrendingmovie=async()=>{
        const{ data }=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        console.log(data);
        setmovies(data.results);
        
    };
useEffect(() => {
    gettrendingmovie();
    
}, [page]);


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

    return (

        <div>
           
           <div className="hot"> 
            
                {movies && movies.map((event) => 
                <Display overview={event.overview} key={event.id} id={event.id} poster={event.poster_path} releasedate={event.release_date||event.first_air_date} title={event.title||event.name} mediatype={event.media_type} vote_average={event.vote_average}/>)
                
            }
           </div>
          
         <CustomPagination setPage={setPage}/>  
        </div>
    )
}

export default Hot
