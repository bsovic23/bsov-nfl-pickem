import React from 'react';

// Page Imports
import Homepage from './pages/Homepage';
import Results from './pages/Results';

// Component Imports

function App() {
  return (
    <section class='app'>
      <header>
        HEADER HERE
      </header>
      <div>
        <Homepage />
      </div>
      <div>
        <Results />
      </div>
      <footer>
        FOOTER HERE
      </footer>
    </section>
  );
}

export default App;
