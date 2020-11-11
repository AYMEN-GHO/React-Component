import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import Name from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <ProfilPhoto />
      <Name />
      <Address />
    </div>
  );
}

export default App;
