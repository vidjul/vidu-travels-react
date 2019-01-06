import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        if (!this.props.auth.isAuthenticated && !this.props.auth.user.isAdmin) {
            this.props.history.push('/login');
        }
        axios.get('/api/admin/listUsers')
            .then((res) => this.setState({ data: res.data }))
            .catch(err => console.log(err))
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.auth.isAuthenticated && !this.props.auth.user.isAdmin) {
            this.props.history.push('/login')
        }
    }

    render() {

        const rows = this.state.data.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.bookedTickets}</td>
                    <td>{user.password}</td>
                </tr>
            )
        })

        return (
            <section className="section is-medium">
                <div className="container">
                    <h1 className="title">Client list</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Booked tickets</th>
                                <th>Password hash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(withRouter(AdminDashboard));