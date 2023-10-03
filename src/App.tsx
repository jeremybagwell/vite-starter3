import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MNavLogger } from './MNavLog';

// Create a new instance of MNavLogger
let logger = new MNavLogger("AppComponent", null, 'debug');

// export default App
function App() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState('red');

  const toggleButtonColor = () => {
    // Toggle the button color
    setButtonColor(buttonColor === 'red' ? 'green' : 'red');
    logger.diagDebug("12345", "This is a debug message");

  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={toggleButtonColor}
          style={{ backgroundColor: buttonColor }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;