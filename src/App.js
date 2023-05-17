import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import NavMenu from './NavMenu.js';
import Home from './Home.js';
import Discover from './Discover.js';
import TopRatedSection from './TopRatedSection.js';
import Settings from './Settings.js';
import UserMenu from './UserMenu.js';
import MoviePage from './MoviePage.js';
function App() {

  return (
    <Router>
      <div className="App">
          <NavMenu/>
        <div className="container">
          <Navbar/>
          <UserMenu/>
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/discover'>
                <Discover/>
              </Route>
              <Route path='/movie/:id'>
                <MoviePage/>
              </Route>
              <Route path='/settings'>
                <Settings/>
              </Route>
              <Route path='/top-rated'>
                <TopRatedSection/>
              </Route>
                
            </Switch> 
          </div>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
