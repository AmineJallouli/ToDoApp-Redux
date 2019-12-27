import React, { Component } from 'react';
import { connect } from 'react-redux';
 class List extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
        
         return ( <div>
             <ul>
                {this.props.tab.map(el=>
                    <div key={el.id}>
                        <li>
                            <p>{el.value}</p>
                            <div className="btn">
                                <button onClick={()=>this.props.Delete(el.id)}>Delete</button>
                                <button onClick={()=>this.props.Modify(el.id)}>Edit</button>
                            </div>
                            
                        </li>
                    </div>
                )}
             </ul>
         </div> );
     }
 }
  
const mapStateToProps = (state)=>{
    return{
        tab:state.output
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        Delete : x =>{
            dispatch({
                type:"DEL_INPUT",
                payload:x
            })
    },

    Modify : e =>{
        dispatch({
            type:"MODIFY_INPUT",
            payload:{value:prompt("New"),id:e}
        })
    }

    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(List) 