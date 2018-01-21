import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'nidhin'
    }
    //this.onClickButton= this.onClickButton.bind(this);
  }

  componentDidMount(){
    console.log('Dis mout')
  }

 componentWillUpdate(){
    console.log('Dis componentWillUpdate')
    
  }

  componentDidUpdate(){
    console.log('Dis componentDidUpdate')

  }
onClickButton=()=>{
  this.setState({name:'Debasdf'});
}
  
  render() {
    return (
      <div>
      <h1>Hello
      {this.state.name}</h1>
      <button onClick={this.onClickButton}/>
      </div>
    );
  }
}

export default Login;