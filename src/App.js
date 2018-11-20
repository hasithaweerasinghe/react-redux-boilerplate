import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionA, actionB } from './store/actions';

class App extends Component {

  render() {
    return (
      <div>
        <h1>React-Redux-Thunk-Boilerplate</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.exampleReducer.character
  }
}

const mapDispatchToProps = {
  actionA,
  actionB
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

