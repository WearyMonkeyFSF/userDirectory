import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class MyJumbotron extends React.Component {
    render(){
        return (
            <Jumbotron fluid>
                <h1 className="header d-flex justify-content-center">Employee Directory</h1>
            </Jumbotron>
        )
    }
}