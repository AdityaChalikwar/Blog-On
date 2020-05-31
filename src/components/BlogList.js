import React from 'react'
import BlogListItem from './BlogListItem'
import { connect } from 'react-redux'
import { selectBlogs } from '../selectors/selectors'

const BlogList = (props) => (
    <div className="container">
        {
            props.blogs.length === 0 ? ( 
            <p className="no-blogs-message">No Blogs</p>
            ) : (
                <div className="list-body">
                    <div className="list-header">
                        <div className="show-for-mobile">Blogs</div>
                        <div className="show-for-desktop">Blog</div>
                        <div className="show-for-desktop">Reads</div>
                    </div>
                    {props.blogs.map((blog, index) => <BlogListItem key={index} {...blog}/>)}
                </div>
            )
        }
    </div>
)

const matchStateToProps = (state) => ({
    blogs: selectBlogs(state.blogs, state.filters)
})

export default connect(matchStateToProps)(BlogList)