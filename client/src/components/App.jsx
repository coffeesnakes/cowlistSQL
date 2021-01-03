import React from "react";
import { Fragment } from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
    }

    // bindings here
    this.getCows = this.getCows.bind(this);
    this.addCow = this.addCow.bind(this);

  }


  // mount initial database here
  componentDidMount() {
    this.getCows();
  }

  // axios get to set up the state of the cows data
  getCows() {
    axios
      .get("/cows")
      .then((res) => {
        const { data } = res;
        this.setState({ cows: data });
      })
      .catch((err) => console.log(err));
  }

  // axios post
  addCow(cow) {
    axios.post('/cows', cow)
    .then(this.getCows)
    .catch(console.log)
  }

  render() {
    return (
      <Fragment>

        < Header />
        <List cows={this.state.cows} />
        <Form addCow={this.addCow} />

      </Fragment>
    );
  }
}

export default App;
