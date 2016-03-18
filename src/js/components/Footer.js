import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import FontIcon from 'material-ui/lib/font-icon'
import IconButton from 'material-ui/lib/icon-button'
import ActionHome from 'material-ui/lib/svg-icons/action/home'
import SocialLocationCity from 'material-ui/lib/svg-icons/social/location-city'


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="toolbar">
                    <Link to="/">
                        <IconButton tooltip="SVG Icon">
                            <ActionHome />
                        </IconButton>
                    </Link>
                    <Link to="/community">
                        <IconButton tooltip="SVG Icon">
                            <SocialLocationCity />
                        </IconButton>
                    </Link>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
}
