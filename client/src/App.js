import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Destinasi from './components/Destinasi';
import Testimoni from './components/Testimoni';

function App() {
  return (
    <div className="grid-container">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/destinasi/:id" exact component={Destinasi} />
        <Route path="/testimoni" exact component={Testimoni} />
      </Switch>
      <footer>
        <p>
          mayopentrip{' '}
          <span role="img" aria-label="love">
            &#128151;
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
