import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
            <Route exact path='/' >
              <Login />
            </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
