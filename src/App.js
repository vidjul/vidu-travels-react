import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
        </div>
      </Provider>
    )
  }
}

export default App;
