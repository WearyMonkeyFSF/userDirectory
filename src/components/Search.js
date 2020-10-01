import React from "react";

export default class Search extends React.Component{
    render(){
        return(
            <form className="form d-flex justify-content-center form-inline">
                <input
                    value={this.props.Search}
                    className="form-control mr-sm-2"
                    type="text"
                    onChange={this.props.inputChange}
                    placeholder="Search"
                    aria-label="Search"
                />
            </form>
        )
    }
}
