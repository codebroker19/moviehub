import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./Moviedisplay.css";
import { img_300,unavailable } from "../../config/config"
import Modal from './Modal';

const useStyles = makeStyles({
    root: {
      maxHeight:"350px",
      maxWidth:"350px"
    },
  
  });
  const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
  };
 

const Moviedisplay = (props) => {
  const [open,setOpen]=useState(false);
    const classes = useStyles();
    return (
    
        <div className="maindiv">
        <div className="centerdiv">
        
        <img  src={props.poster? `${img_300}/${props.poster}` : unavailable} alt={props.title}/>
        <button onClick={()=>setOpen(true)}>
         <div className="details">
          <h1 className="star">⭐</h1>
          <h1>{props.vote_average===0?"N/A":props.vote_average}</h1>
         {/*<h1 className="type">{props.mediatype==="tv"?"Web Series":"Movie"}</h1>*/} 
         {/*<h1 className="title">{props.title}</h1>*/}
        </div>
      
      </button> </div>
       <Modal open={open} close={()=>setOpen(false)}>
       {props.overview}

       </Modal>
        </div>
       

    )
}

export default Moviedisplay
