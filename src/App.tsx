import { useState } from 'react'
import './App.css'

import { MNavLogger, SecStatus, SecType } from '@juno/mnavlogging';

let logger = new MNavLogger("typescriptComponent");

function App() {
  const [count, setCount] = useState(0);
  const [buttonColor, setButtonColor] = useState('red');

  const toggleButtonColor = () => {
    // Toggle the button color
    setButtonColor(buttonColor === 'red' ? 'green' : 'red');
    setCount((count) => count + 1);

    logger.setCorrelationId("CLIENT45354")

    logger.diagTrace("12345", "Testing diagTrace() and count is " + count );
    logger.diagTrace("Testing diagTrace() and count is " + count );
    logger.diagDebug("12345", "Testing diagDebug() and count is " + count );
    logger.diagDebug("Testing diagDebug() and count is " + count );
    logger.diagInfo("12345", "Testing diagInfo() and count is " + count );
    logger.diagInfo("Testing diagInfo() and count is " + count );
    logger.diagWarn("12345", "Testing diagWarn() and count is " + count );
    logger.diagWarn("Testing diagWarn() and count is " + count );
    logger.diagError("12345", "Testing diagError() and count is " + count );
    logger.diagError("Testing diagError() and count is " + count );
    logger.secInfo("12345", SecType.ADMN, SecStatus.PASS, "Testing secInfo() and count is " + count );
    logger.secInfo(SecType.ADMN, SecStatus.PASS, "Testing secInfo() and count is " + count );
    logger.secWarn("12345", SecType.ADMN, SecStatus.PASS, "Testing secWarn() and count is " + count );
    logger.secWarn(SecType.ADMN, SecStatus.PASS, "Testing secWarn() and count is " + count );
    logger.secError("12345", SecType.ADMN, SecStatus.PASS, "Testing secError() and count is " + count );
    logger.secError(SecType.ADMN, SecStatus.PASS, "Testing secError() and count is " + count );
  };

  return (
    <>
      <h1>Client-side Test Page</h1> 
      <div className="card">
        <button
          onClick={toggleButtonColor}
          style={{ backgroundColor: buttonColor }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
