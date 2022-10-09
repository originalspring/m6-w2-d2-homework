import React from 'react';
import {connect} from 'react-redux'

class Counter extends React.Component{
  //state
  state = {count:0}

  // action
  increment = () => {
    this.props.dispatch({
      type:'INCREMENT'
    });
  }
  // action
  decrement = () => {
    this.props.dispatch({
      type:'DECREMENT'
      
    });
  }

  render(){
    return(
      <div>
        <h2>Counter</h2>
        <div>
          <span>{this.props.count}</span>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.decrement}>+</button>
      </div>
      </div>
    )
  }
}

//function mapStateToProps function: return state from redux
function mapStateToProps(state){
  return{
    count:state.count
  };
}


export default connect(mapStateToProps)(Counter);
