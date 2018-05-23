import React, { Component } from 'react';
import axios from 'axios';
class Create extends Component {

   // constructor(props){
   //    super(props);
   //    this.state={
   //      items: []
   //    }
   //  }

  // componentDidMount(){
  //   console.log('Dis mout');
  //   axios.get('http://localhost:3000/api/v1/items')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.desc.value;
    var prep_time = this.refs.prep_time.value;
    var difficulty = this.refs.difficulty.value;
    var origin = this.refs.origin.value;
    axios.post('http://localhost:3000/api/v1/items', {
    name: name,
    description: description,
    difficulty: difficulty,
    prep_time: prep_time,
    origin: origin
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    };
  
  render() {
    return (
      <div>
      <input type='text' ref='name' placeholder='Enter the name of item' />
      <input type='text' ref='desc' placeholder='Describe the item' />
      <input type='text' ref='prep_time' placeholder='Enter the preparation time' />
      <input type='text' ref='difficulty' placeholder='Enter the level of difficulty' />
      <input type='text' ref='origin' placeholder='Enter the place to which item belongs' />
      <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default Create;