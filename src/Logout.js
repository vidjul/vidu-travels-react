import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {logoutUser} from './actions/authentication';

class Logout extends Component {
    componentDidUpdate() {
        logoutUser(this.props.history);
    }
}

export default withRouter(Logout);