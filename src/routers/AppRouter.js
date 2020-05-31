import React from 'react'
import {Switch, Router, Route} from 'react-router-dom'
import './../styles/styles.scss'
import Dashboard from './../components/Dashboard'
import NotFoundPage from './../components/NotFound'
import LoginPage from './../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import MyBlogs from '../components/MyBlogs'
import Help from '../components/Help'
import CreateBlog from '../components/CreateBlog'
import EditBlog from '../components/EditBlog'
import ReadBLog from '../components/ReadBlog'

export const history = createHistory() 

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/home" component={Dashboard}/>
                <PrivateRoute path="/help" component={Help} />
                <PrivateRoute path="/blogs" component={MyBlogs} />
                <PrivateRoute path="/create" component={CreateBlog} />
                <PrivateRoute path="/edit/:id" component={EditBlog} />
                <Route path="/read/:id" component={ReadBLog} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter