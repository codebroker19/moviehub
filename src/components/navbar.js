import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import MovieSharpIcon from '@material-ui/icons/MovieSharp';
import LaptopMacSharpIcon from '@material-ui/icons/LaptopMacSharp';
//import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom:0,
    position:"fixed",
    backgroundColor:"#2d313a",
    color:"white",
    zIndex:"100"
  },
  
});


export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history=useHistory();
 
  useEffect(() => {
    if(value === 0)
   { history.push("/explore");}
    else if(value === 1)
    {history.push("/");}
    else if(value === 2)
    {history.push("/movies");}
    else if(value === 3)
    {history.push("/webseries");}
       
  }, [value,history]);

  return (
  

    <BottomNavigation value={value} onChange={(event,newValue)=>{setValue(newValue);}} showLabels className={classes.root}>
       <BottomNavigationAction className="bottom" style={{color:"#FDFAF6"}} label="Explore" icon={<SearchSharpIcon />} />
      <BottomNavigationAction className="bottom" style={{color:"#FDFAF6"}} label="Hot" icon={<WhatshotSharpIcon />} />
      <BottomNavigationAction className="bottom" style={{color:"#FDFAF6"}} label="Movies" icon={<MovieSharpIcon />} />
      <BottomNavigationAction className="bottom" style={{color:"#FDFAF6"}} label="Webseries" icon={<LaptopMacSharpIcon />} />
      
    </BottomNavigation>
  );
}