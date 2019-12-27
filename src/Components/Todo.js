import React, { Component } from 'react';
import { connect } from 'react-redux';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="todo">
            <h1>Daily Todo lists</h1>
            <input type="text" onChange={(e)=>{this.props.InputValue(e.target.value)}} placeholder="Add your todo"/>
            <button onClick={()=>{this.props.Add(this.props.input)}}>+</button>

        </div> );
    }
}



const mapDispatchToProps=(dispatch)=>{
    return{
        InputValue: x =>{
            dispatch({
                type:"SET_INPUT", 
                value:x
            })
        },
        Add: x =>{
            dispatch({
                type:"ADD_INPUT",
                payload:{value:x,id:Math.random()},
                
            })
        }
    }
}

const mapStateToProps=(state)=>{
    return{
        input:state.input
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Todo)