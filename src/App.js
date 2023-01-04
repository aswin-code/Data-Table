import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

function App() {
  const [home, setHome] = useState(true)
  return (
    <div className="App">

      <div className='container'>
        <div>
          <button onClick={() => setHome(true)} >PageOne</button>
          <button onClick={() => setHome(false)}>PageTwo</button>
        </div>
        {
          home ? <PageOne /> : <PageTwo />
        }
      </div>
    </div>
  );
}

export default App;
