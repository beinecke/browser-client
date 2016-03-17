import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export default class PostList extends Component {
    render () {
        return (
            <div className="container">
                <ul>
                    {this.props.posts.map((post, index) =>
                        <li {...post} key={index} >
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired
}
