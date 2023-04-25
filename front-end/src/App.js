import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("nsbchjsbf");
  let url = "http://127.0.0.1:5000/shortUrls";

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios(url, {
      method: "POST",
      name:name
    })
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
    console.log("clicked");
  };
  return (
    <div className="App">
      <form onSubmit={ handleSubmit }>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        <button type="submit">post</button>
      </form>
    </div>
  );
}

export default App;
