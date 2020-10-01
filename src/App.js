import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import MyJumbotron from "./components/Jumbotron";
import Search from "./components/Search"

function App() {
  return (
    <Wrapper>
      <MyJumbotron />
      <Search />
    </Wrapper>

  );
}

export default App;
