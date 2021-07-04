import Pagination from "@material-ui/lab/Pagination";
import "./CustomPagination.css";
import { createMuiTheme,ThemeProvider } from "@material-ui/core/styles";


const theme=createMuiTheme({
    palette:{
        type:"dark",
    },
});

const CustomPagination = ({setPage,numberofpages = 250}) => {
     const handlePageChange = (page)=>{
         setPage(page);
        window.scroll(0,0);};
    
    return (
        <div className="pages">
        <ThemeProvider theme={theme}>
        <Pagination color="primary" count={numberofpages}onChange={(event)=>{handlePageChange(event.target.textContent)}} hideNextButton hidePrevButton/>
        </ThemeProvider>
            
        </div>
    )
}

export default CustomPagination
