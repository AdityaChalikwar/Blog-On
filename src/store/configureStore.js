import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk';
import { blogsReducer } from '../reducers/blogs';
import { withReduxStateSync, createStateSyncMiddleware } from 'redux-state-sync';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default () => {
    const config = {
    // TOGGLE_TODO will not be triggered in other tabs
        blacklist: ['TOGGLE_TODO'],
    }
    const middlewares = [
        createStateSyncMiddleware(config),
        thunk
    ];
    const rootReducer = combineReducers({
        blogs: blogsReducer,
        auth: authReducer,
        filters: filtersReducer
    })
    const store = createStore(
        withReduxStateSync(rootReducer), 
        {}, 
        composeEnhancers(applyMiddleware(...middlewares))
    )
    
    return store
}