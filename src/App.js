import React, { Component } from 'react';
import Results from './Results';
import {Link, Router} from '@reach/router'
import Details from './Details';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div >
      <header>
        <Link to='/'>
          Adopt Me!
        </Link>
      </header>
        <Router>
          <Results path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
     );
  }
}
 
export default App;