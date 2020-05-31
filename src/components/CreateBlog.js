import React from 'react'
import Blog from './Blog'
import { startAddBlog } from '../actions/blogs'
import { connect } from 'react-redux'

export class CreateBlog extends React.Component {
    onSubmit = (blog) => {
        this.props.startAddBlog(blog)
        this.props.history.push('/blogs')
    }
    
    render(){
        return (
            <div>
                <div className="page-header">
                        <h1 className="page-header__title">New Blog</h1>
                </div>
                <Blog onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const matchDispatchToProps = (dispatch) => ({
    startAddBlog: (blog) => dispatch(startAddBlog(blog))
})

export default connect(undefined, matchDispatchToProps)(CreateBlog)