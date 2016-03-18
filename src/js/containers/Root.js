import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import Home from './Home'
import Community from './Community'
import Post from './Post'
import * as reducers from '../reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
    //loggerMiddleware,
    thunkMiddleware
)(createStore)

const store = createStoreWithMiddleware(
    combineReducers(Object.assign({}, reducers, {
        routing: routerReducer
    }))
);

const history = syncHistoryWithStore(hashHistory, store);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={Home} />
                    <Route path='/posts' component={Home} />
                        <Route path='/posts/:id' component={Post} />
                    <Route path='/community' component={Community} />
                </Router>
            </Provider>
        )
    }
}
