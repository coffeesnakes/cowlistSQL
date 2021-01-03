import React from "react";
import { Component } from 'react';

class Entry extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this);

  }
  handleDelete() {
    this.props.deleteCow(this.props.cow.id);
  }



  render() {
    const {name, description} = this.props.cow;
    return (
      <li>
        <span>{name}</span>
        <span>{description}</span>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

// const Entry = ({cow}) => {
//   console.log('log from entry: ', cow)
//   return (
//     <li>
//       <span> Name: {cow.name}</span>
//       <span> Description: {cow.description}</span>
//     </li>
//   );
// };

export default Entry;
