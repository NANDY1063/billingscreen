// src/App.jsx
import React from 'react';
import './App.css';
import BillingScreen from "./components/BillingScreen.jsx"; // For .jsx filesction';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <BillingScreen />
        </div>
      </div>
    </div>
  );
}

export default App;