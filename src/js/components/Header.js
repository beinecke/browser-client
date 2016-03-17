import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="/community">社区</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
}
