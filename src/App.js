import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link,Routes} from "react-router-dom";
import Home from './Home';
import JoinUs from './JoinUs';
import OurWork from './OurWork';
import WhoWeAre from './WhoWe';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route exact path={"/"} Component={Home}/>
            <Route exact path={"/ourWork"} Component={OurWork}/>
            <Route exact path={"/whoWe"} Component={WhoWeAre}/>
            <Route exact path={"/joinUs"} Component={JoinUs}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
