import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { BaseValues, ProfileSettings } from './Parameters.jsx'
import Values from './Values.jsx';

function App() {
  // State variables for parameters and insulin sensitivity
  const [baseBR, setBaseBR] = useState(0.5);
  const [baseICR, setBaseICR] = useState(8);
  const [baseCF, setBaseCF] = useState(50);


  // Function to handle parameter adjustments
  const handleBaseValueChange = (event, parameter) => {
    const value = parseFloat(event);
    switch (parameter) {
      case 'basalRate':
        setBaseBR(value);
        break;
      case 'ICR':
        setBaseICR(value);
        break;
      case 'correctionFactor':
        setBaseCF(value);
        break;
      default:
        break;
    }
  };

  const [overallChange, setOverallChange] = useState(0);
  const [disableCorrections, setDisableCorrections] = useState(false);

  const handleProfileSettingsChange = (event, parameter) => {
    let value;
    switch (parameter) {
      case 'overallChange':
        value = parseInt(event);
        setOverallChange(value);
        break;
      case 'disableCorrections':
        setDisableCorrections(event);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className='title'>insulin pump profiles</div>
      <div className='values'>
        <Values baseBR={baseBR} baseICR={baseICR} baseCF={baseCF} onParameterChange={handleBaseValueChange} overallChange={overallChange} disableCorrections={disableCorrections} />
      </div>
      <div className='settings'>
        <ProfileSettings overallChange={overallChange} disableCorrections={disableCorrections} onParameterChange={handleProfileSettingsChange} />
      </div>
    </div>
  );
}

export default App;
