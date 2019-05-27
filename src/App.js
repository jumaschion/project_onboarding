import "./App.css";

import React, { Component } from "react";

import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="titulo__melhorias">Melhorias:</h3>
        <form className="form__melhorias">
          <div className="input">
            <input type="radio" name="type" value="minimum-price" />
            <label>Minimum-price</label>
          </div>

          <div className="input">
            <input type="radio" name="type" value="coverage-five" />
            <label>Coverage-Five</label>
          </div>

          <div className="input">
            <input type="radio" name="type" value="online-time" />
            <label>Online-time</label>
          </div>
        </form>

        <div>
          <h3 className="titulo__restaurantes">Restaurantes:</h3>
          <form className="form__restaurantes">
          
            <div className="input">
              <input type="checkbox" name="type" value="minimum-price" />
              <label>Mc Donalds</label>
            </div>
            
            <div className="input">
            <input type="checkbox" name="type" value="coverage-five" />
            <label>Habibs</label>
            </div>

            <div className="input">
            <input type="checkbox" name="type" value="online-time" />
            <label>Bobs</label>
            </div>
            
          </form>
        </div>

        <div>
          <Button>Gerar Melhorias</Button>
        </div>
      </div>
    );
  }
}

export default App;
