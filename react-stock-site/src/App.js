import './App.css';
import Navbar from './components/Navbar/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
