import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {firebase} from '../firebase/firebase'

export const ReadBlog = (props) => (
    <div className="read-container">
        <div className="read-container__title">
            <div>
                <h1>{props.blog.title}</h1>
            </div>
            <div>
            {
                props.blog.uid.localeCompare(firebase.auth().currentUser.uid) === 0 
                && 
                <Link to={`/edit/${props.blog.id}`} className="button">Edit Blog</Link>
            }
            </div>
        </div>
        <div className="read-container__data">
            <p>{props.blog.body}</p>
        </div>
    </div>
)

const matchStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => blog.id === props.match.params.id)
})

export default connect(matchStateToProps)(ReadBlog)