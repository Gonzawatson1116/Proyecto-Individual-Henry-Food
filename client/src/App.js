import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path ="/" component ={LandingPage} />
        <Route exact path="/home" component={Home} />
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
