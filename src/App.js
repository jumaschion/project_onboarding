import "./App.css";

import React, { Component } from "react";

import Button from "./components/Button";
import Container from "./components/Container";
import Formulario from "./components/Formulario";
import Modal from "./components/Modal";
import Select from "./components/Select";
import Title from "./components/Title";

const mockData = [
  {
    id: "123456",
    commonIdentifier: "minimum-price"
  },
  {
    id: "1234567",
    commonIdentifier: "coverage-five"
  },
  {
    id: "12345678",
    commonIdentifier: "Menu"
  }
];

const mockDataRestaurants = [
  {
    id: "12345678",
    commonIdentifier: "Habibs"
  },
  {
    id: "123467891011",
    commonIdentifier: "Ayoama"
  },

  {
    id: "123456789",
    commonIdentifier: "Mcdonalds"
  },
  {
    id: "12345678910",
    commonIdentifier: "Sukiya"
  }
];
class App extends Component {

   
  state = {
    selectedOption: null,
    show: false
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  handleClick = () => {
    console.log("clicou")
    this.setState({
      clicked: true
    });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Container>
        
        <Title titleName="Recommendations" />

        <Formulario
          title="Melhorias"
          type="radio"
          name="radio"
          value="value"
          className="form"
          arrayData={mockData}
        />
        
        <Title titleName="Restaurants" />

        <Select
          className="select"
          value={selectedOption}
          onChange={this.handleChange}
          arrayData={mockDataRestaurants}
        />

        <Modal show={this.state.show} handleClose={this.hideModal} />

        <Button
          onClick={this.showModal}
          className="btn__changeImprovements"
          titleBtn="Change improvements"
        />
        <Button
          onClick={this.handleClick}
          className="btn__primary"
          titleBtn="Generate Improvements"
        />
      </Container>
    );
  }
}

export default App;
