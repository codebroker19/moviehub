import { useState,useEffect } from "react";
import axios from "axios";
import "./Webseries.css";
import Webseriesdisplay from "./Webseriesdisplay";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Genres from "../../components/Genres/Genres";
import Usegenre from "../../Hooks/Usegenre";
import { PinDropSharp } from "@material-ui/icons";

const Webseries = () => {
    const[webseries,setwebseries]=useState([]);
    const [page,setPage]=useState(1);
    const [genres,setgenres]=useState([]);
    const [chosengenres,setchosengenres]=useState([]);
    const[numPages,setNumOfPages]=useState([]);
    const genreforURL=Usegenre(chosengenres);
    const getwebseries =async()=>{const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=India&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_genres=${genreforURL}`);
    setwebseries(data.results);
    setNumOfPages(data.total_pages);
    console.log(data.results);}
    useEffect(() => {
        getwebseries();
    }, [genreforURL,page]);

    return (
        <div className="webseries">
         {<Genres genres={genres} type="tv" setPage={setPage}  setgenres={setgenres} chosengenres={chosengenres} setchosengenres={setchosengenres}/>}

        {webseries&&webseries.map((event)=><Webseriesdisplay poster={event.poster_path} overview={event.overview} vote_average={event.vote_average} first_air_date={event.first_air_date} key={event.id} id={event.id}/>)}
        {numPages>1&&(<CustomPagination setPage={setPage} setNumOfPages={setNumOfPages}/>)}
        </div>
    )
}

export default Webseries
