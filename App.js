import React from 'react';
import './App.css';
import ShortForm from './shortform.js';
import LongForm from './longform.js'

function App() {
  return (<div className="App">
    <header className="App-header"></header>
    <main>
      <div className="firstpage">
        <h1>Lista awarii</h1>
        <LongForm />
        <h1>Zgłoszenia</h1>
        <LongForm/>
      </div>
      <div className="secondpage">
        <h1>Changelog</h1>
        <ShortForm/>
        <h1>Lista Testów</h1>
        <ShortForm/>
      </div>
    </main>
  </div>
);
}

export default App;
