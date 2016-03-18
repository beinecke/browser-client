import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
                <Footer />
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
