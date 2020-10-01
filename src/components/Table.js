import React from "react";
import ItemEmp from "./Item.js";

const style = {
    tableStyle: {
        padding: "20px",
        width: "80%",
        margin: "auto",
        border: "1px solid black"
    }
}
export default class Table extends React.Component{
    render(){
        const employees = this.props.employees.filter( e =>{
            return e.name.toLowerCase().indexOf( this.props.search.toLowerCase() ) !== -1
        })
        return(
            <table style={style.tableStyle} className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th onClick={this.props.sortName} value='name'>Name</th>
                        <th value='email'>Email</th>
                        <th value='phone'>Phone</th>
                        <th value='image'>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e =>(
                        <ItemEmp 
                            key={e.id}
                            name={e.name}
                            email={e.email}
                            phone={e.phone}
                            image={e.image}
                        />                        
                    ))}
                </tbody>
            </table>
        )
    }  
}