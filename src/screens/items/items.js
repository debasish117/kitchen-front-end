import React, { Component } from 'react';
import axios from 'axios';
class Items extends Component {

 constructor(props){
    super(props);
    this.state={
      items: []
    }
  }

  componentDidMount(){
    console.log('Dis mout');
    axios.get('http://localhost:3000/api/v1/items')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    return (
      <div>All item componets..</div>
    );
  }
}

export default Items;