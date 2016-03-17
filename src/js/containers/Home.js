import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { requestPosts, receivePosts, fetchPosts } from '../actions'
import Header from '../components/Header'
import PostList from '../components/PostList'

class Home extends Component {

    componentDidMount() {
        const { dispatch, posts } = this.props
        dispatch(fetchPosts(1))
    }

    render() {
        const { posts } = this.props
        return (
            <div>
                <Header />
                <PostList posts={posts} />
            </div>
        )
    }
}

Home.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired
}

function select(state) {
    const {
        isFetching,
        items: posts
    } = state.posts || {
        isFetching: true,
        items: []
    }

    return {
        isFetching,
        posts
    }

}

export default connect(select)(Home)
