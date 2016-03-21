import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Divider from 'material-ui/lib/divider'

export default class PostList extends Component {
    render () {
        return (
            <div>
                <List>
                    {this.props.posts.map((post, index) =>
                        <Link {...post} key={index} to={`/posts/${post.id}`}>
                            <ListItem
                                primaryText = {post.title}
                                secondaryText = {post.digest}
                            />
                            <Divider />
                        </Link>
                    )}
                </List>
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        digest: PropTypes.string.isRequired
    })).isRequired
}
