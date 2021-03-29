import './App.css';
import { Link } from 'react-router-dom';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddEvents from './components/AddEvents/AddEvents';



function App() {
  return (
    <div className="container">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addeEvents">Add Events</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addeEvents">
              <AddEvents />
            </Route>
            <Route path="/dashboard">
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );

}

export default App;
