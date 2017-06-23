import React, { Component } from 'react';

import Name from './Name';

class App extends Component {
  render() {
    let name = 'john';

    return (
      <div>
        <h1>Hello World!</h1>

        <Name name={name} />
      </div>
    );
  }
}

export default App;