import { Button, createMuiTheme, Tabs, ThemeProvider } from "@material-ui/core";
import  TextField  from "@material-ui/core/TextField";
import { Movie } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Moviedisplay from "../Movies/Moviedisplay";
import "../Hot/Hot.css";
import "./Explore.css";

const Explore = () => {
    const darkTheme=createMuiTheme({
        palette:{
            type:"dark",
            primary:{
                main:"#fff",
            },
        },
        });
        const [type, setType] = useState(0);
        const [searchtext, setsearchtext] = useState("");
        const [page, setPage] = useState(1);
        const [content, setContent] = useState([]);
        const [numofpage, setnumofpages] = useState();
    const getsearched = async() =>{ const {data}=await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchtext}&page=${page}&include_adult=false`);
     setContent(data.results);
     setnumofpages(data.total_pages);
    };

    useEffect(() => {
        getsearched();
    }, [page])

    return (
        
        <div>
      
       
        
        <ThemeProvider theme={darkTheme}>
        <div className="explore">
        <TextField style={{flex:1}} 
            onChange={(event)=>setsearchtext(event.target.value)}
            label="Explore"
                variant="filled"
                
            />
<div className="button"><Button style={{fontSize:25}} variant="contained" color="primary" href="#contained-buttons" onClick={getsearched}>Go</Button></div>
        </div>
            
            </ThemeProvider>
        <div className="hot">
       
         {content && content.map((event)=>(<Moviedisplay overview={event.overview} key={event.id} id={event.id} poster={event.poster_path}  vote_average={event.vote_average}/>))}
         
         {searchtext&&!content&&(<h2>Nothing found</h2>)}
        </div>
        {numofpage >1 && (<CustomPagination style={{Top:0}} className="page" setPage={setPage} numofpage={numofpage}/>)}
        </div>
        
    )
}

export default Explore
