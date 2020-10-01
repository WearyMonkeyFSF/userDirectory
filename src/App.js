import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import MyJumbotron from "./components/Jumbotron";
import Search from "./components/Search"
import Table from "./components/Table";
import list from "./list.json"

export default class App extends React.Component{

  //set state
  state = {
    employees: list,
    search: ""
  }

  handleInputChange = e => {
    let search = e.target.value;

    this.setState({
      search: search
    });
  }

  sortName = e =>{
    let empSort = [];

    empSort = [...list]
      empSort.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    
      this.setState({
        employees: empSort
      })
  }


  render(){
    return (
      <Wrapper>
        <MyJumbotron />
        <Search search={this.state.seach} handleInputChange={this.handleInputChange}/>
        <Table sortName={this.sortName} employees={this.state.employees} search={this.state.search}/>
      </Wrapper>

    );
  }
}
