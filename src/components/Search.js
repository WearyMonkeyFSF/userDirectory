import React from "react";

const style = {
    inputStyle: {
        padding: "10px",
        width: "50%",
        marginBottom: "30px"
    }       
}
export default class Search extends React.Component{
    render(){
        return(
            <form className="form d-flex justify-content-center form-inline">
                <input
                    value={this.props.search}
                    className="form-control mr-sm-2"
                    type="text"
                    onChange={this.props.inputChange}
                    placeholder="Search"
                    aria-label="Search"
                    style={style.inputStyle}
                />
            </form>
        )
    }
}
