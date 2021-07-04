import { makeStyles } from '@material-ui/core/styles';
import "./Webseriesdisplay.css";
import { img_300,unavailable } from "../../config/config";
import "./Webseriesdisplay.css";
import React,{useState} from 'react';
import Modal from '../Movies/Modal';
const useStyles = makeStyles({
    root: {
      maxHeight:"350px",
      maxWidth:"350px"
    },
  });
const Webseriesdisplay = (props) => {
  const [open,setOpen]=useState(false);
    return (
        <div className="maindiv">
        <div className="centerdiv">
        <img src={props.poster? `${img_300}/${props.poster}` : unavailable} alt={props.title}/>
        <button onClick={()=>setOpen(true)}>
         <div className="details">
          <h1>⭐</h1>
          <h1>{props.vote_average===0?"N/A":props.vote_average}</h1>
           <h2>since</h2>
           <h2>{props.first_air_date}</h2>
         </div>
         </button>
         <Modal open={open} close={()=>setOpen(false)}>
       {props.overview}</Modal>
        </div>
            
        </div>
    )
}

export default Webseriesdisplay
