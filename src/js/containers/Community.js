import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

class Community extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>社区</h1>
                </div>
            </div>
        )
    }
}

Community.propTypes = {
}

function select(state) {
    return {
    }

}

export default connect(select)(Community)
