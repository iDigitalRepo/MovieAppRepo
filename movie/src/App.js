import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
import AddMovie from './components/addMovie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      Movie app
      <Router>
                    <div>
                        <Switch>
                        <Route exact path='/' component={Movie}></Route>
                        <Route exact path='/add' component={AddMovie}></Route>

                        </Switch>
                    </div>
               </Router>
    </div>
  );
}

export default App;
