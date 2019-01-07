import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authentication'
import 'bulma/css/bulma.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import SearchPage from './SearchPage';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';
import store from './store';
import setAuthToken from './setAuthToken';


if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  try {
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
  }
  catch {
    setAuthToken(false);
    window.location.href = '/login';
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <div>
              <Navbar />
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Register} />
              <Route path="/search" component={SearchPage} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/admin/dashboard' component={AdminDashboard} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App;
