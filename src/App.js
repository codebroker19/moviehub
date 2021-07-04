import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./Pages/Movies/Movies";
import Hot from "./Pages/Hot/Hot";
import Explore from "./Pages/Explore/Explore";
import Webseries from "./Pages/Webseries/Webseries";
import LabelBottomNavigation from "./components/navbar.js";
import Header from "./components/Header/Header";
import { Container } from "@material-ui/core";

function App(){
    return(
        <BrowserRouter>
    <Header/>
    
    <div className="app">
    <Container>
       <Switch>
           <Route path="/" component={Hot} exact/>
           <Route path="/explore" component={Explore} />
           <Route path="/movies" component={Movies}/>
           <Route path="/webseries" component={Webseries}/>
       </Switch>
    </Container>
    </div>
        <LabelBottomNavigation/>
        </BrowserRouter>
    
    
    );
}
export default App;