import React from 'react';
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

  inputChange = e => {
    this.setState({search: e.target.value})
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
        <Search search={this.state.search} inputChange={this.inputChange}/>
        <Table sortName={this.sortName} employees={this.state.employees} search={this.state.search}/>
      </Wrapper>

    );
  }
}
