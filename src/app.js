import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter, {history} from './routers/AppRouter'
import ConfigureStore from './store/configureStore'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import {firebase} from './firebase/firebase'
import { login, logout } from './actions/auth'
import LoadingPage from './components/LoadingPage'
import { startSetBlogs } from './actions/blogs'
import { initStateWithPrevTab } from 'redux-state-sync'

const store = ConfigureStore()
initStateWithPrevTab(store);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp =  () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetBlogs()).then(() => {
            renderApp()
            if(history.location.pathname === '/')
                history.push('/home')
        })
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})