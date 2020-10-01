import React from "react";

export default class ItemEmp extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>
                    <div className="image-wrapper">
                        <img className="image" src={this.props.image} alt={this.props.name} />
                    </div>
                </td>
            </tr>
        )
    }
}