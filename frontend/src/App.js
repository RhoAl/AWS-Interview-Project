/*
Name: Alexander Yang Rhoads
Program Description: Full stack Showcase for a job interview. Frontend is in React, backend is in Django, and they have to be deployed to AWS. 
File Description: This is the main App.js file for the frontend. It is the main component that is rendered when the app is run.
*/

// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';
import logo from './logo.svg';

// Import Pages
import HomePage from './pages/HomePage';
import AddPage from './pages/CreatePage';
import EditPage from './pages/EditPage';


function App() {

  const [log, setLog] = useState([]);

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Running Log</h1>
          <p>
            Add and Edit Your Running Logs! <br/>
          </p>
        </header>

        <Navigation />

        <main>
            <Route path="/" exact>
              <HomePage setLog={setLog} />
            </Route>

            <Route path="/add-log">
              <AddPage />
            </Route>
            
            <Route path="/edit-log">
              <EditPage log={log} />
            </Route>
          </main>


        <footer>
          <p>© 2024 Alexander Yang Rhoads</p>
        </footer>
      </Router>
    </div>
  );
}

//Default app function
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
