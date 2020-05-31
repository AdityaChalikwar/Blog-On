import React from 'react'
import { firebase } from '../firebase/firebase'
import moment from 'moment'
import uuid from 'uuid'

export default class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.blog ? props.blog.title : '',
            body: props.blog ? props.blog.body : ''
        }
    }

    onBodyChange = (e) => {
        const body = e.target.value
        this.setState(() => ({body}))
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(() => ({title}))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            title: this.state.title,
            body: this.state.body,
            createdAt: moment().valueOf(), 
            reads: {
                id: firebase.auth().currentUser.uid
            }
        })
    }

    render(){
        return (
            <div className="container">
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type='text' 
                        className="text-input"
                        placeholder='Title'
                        autoFocus 
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        required/>
                    <textarea 
                        className="textarea" 
                        placeholder='Start Writing Here........'
                        value={this.state.body}
                        onChange={this.onBodyChange}
                        required/>
                    <div>
                        <button className="button">Save Blog</button>
                    </div>
                </form>
            </div>
        )
    }
}