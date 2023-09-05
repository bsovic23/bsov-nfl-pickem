import React from 'react';

// Page Imports
import Homepage from './pages/Homepage';
import Challenges from './pages/Challenges';
import Results from './pages/Results';

// Component Imports

function App() {
  return (
    <section class='app'>
      <header>
        BSOV PRIZEPICKS GUIDE TO SUCCESS
      </header>
      <div>
        <Homepage />
      </div>
      <div>
        <Challenges />
      </div>
      <footer>
        FOOTER HERE
      </footer>
    </section>
  );
}

export default App;
