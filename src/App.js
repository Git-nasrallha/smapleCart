import React from 'react';
import './App.css';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-light">
          <div className="container">
            <h1> 
              <a href="/" className="navbar-brand"> React Shopping Cart </a> 
            </h1>
            <div className="admin">
              <h1>
               <a href="/">Admin</a> 
              </h1>
            </div>
          </div>
        </nav>
      </header>
      
      <main>
        <Main />
      </main>
     
      <footer>
        <h6>All Rigth Reserved</h6>
      </footer>
    </div>
  );
}

export default App;
