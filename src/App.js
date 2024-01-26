import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route exact path='/' >
              <Login />
            </Route>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
