import React, { Component } from 'react';
import Results from './Results';
import {Router} from '@reach/router'
import Details from './Details';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div >
        <Router>
          <Results path='/' />
          <Details path='/details/:id' />
        </Router>
      </div>
     );
  }
}
 
export default App;