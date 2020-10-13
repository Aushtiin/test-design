import React from 'react';
import './App.css';
import Header from "./components/Header";
import BodyImg from "./components/BodyImg";
import Form from "./components/Form"

function App() {
  return (
    <div className='ghostPage' >
      <Header />
      <div className="ghostbody">
        <div className="row">
          <div className="col-8">
              <BodyImg />
          </div>
          <div className="col-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
