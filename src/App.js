import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import { SearchBox } from ".//components/search-box/search-box.component.jsx";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => this.setState({ monsters: resp.data }))
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}>
          <h1>Monsters</h1>
        </CardList>
      </div>
    );
  }
}

export default App;
