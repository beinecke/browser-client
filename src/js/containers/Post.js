import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Post extends Component {

    componentDidMount() {
        const { dispatch, params } = this.props
        dispatch(fetchPost(params.id))
    }

    render() {
        const { post, params } = this.props
        return (
            <div>
                <Header />
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.digest}</p>
                </div>
                <Footer />
            </div>
        )
    }
}

Post.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired
}

function select(state) {
    const {
        isFetching,
        post
    } = state.post || {
        isFetching: true,
        post: {}
    }

    return {
        isFetching,
        post
    }

}

export default connect(select)(Post)
