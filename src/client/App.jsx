import React from 'react';
import { hot } from 'react-hot-loader';
import AddItem from 'AddItem'
class App extends React.Component {
  render() {
    return (
      <div>
        <AddItem />
      </div>
    );
  }
}

export default hot(module)(App);
