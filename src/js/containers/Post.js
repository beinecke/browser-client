import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'

class Post extends Component {

    componentDidMount() {
    }

    render() {
        const { post, params } = this.props
        return (
            <div>
                <Header />
                <div className="container">
                    <h1>{post.title}</h1>
                    <p>id: {params.id}</p>
                </div>
            </div>
        )
    }
}

Post.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired
}

function select(state) {
    return {
        isFetching: false,
        post: {
            title: 'Title'
        }
    }

}

export default connect(select)(Post)
