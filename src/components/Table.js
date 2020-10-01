import React from "react";
import Item from "./Item.js";

export default class Table extends React.Component{
    render(){
        return(
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th onClick={this.props.sortName} value='name'>Name</th>
                        <th onClick={this.props.sortEmail} value='email'>Email</th>
                        <th onClick={this.props.sortPhone} value='phone'>Phone</th>
                        <th value='image'>Phote</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map(e =>{
                        <Item 
                            key={e.id}
                            name={e.name}
                            email={e.email}
                            phone={e.phone}
                            image={e.image}
                        />                        
                    })}
                </tbody>
            </table>
        )
    }  
}