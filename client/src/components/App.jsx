import React from "react";
import { Fragment } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
    };
    // bindings here
    this.getCows = this.getCows.bind(this);
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
  render() {
    return (
      <Fragment>
        <List />
        <Form />

      </Fragment>
    );
  }
}

export default App;
