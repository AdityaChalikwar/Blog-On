import React from 'react'
import Blog from './Blog'
import Modal from 'react-modal'
import { startRemoveBlog, startEditBlog } from '../actions/blogs'
import { connect } from 'react-redux'

class EditBlog extends React.Component{
    state = {
        openModal: false
    }

    remove = () => {
        this.setState(() => ({openModal: true}))
    }

    closeModal = () => {
        this.setState(() => ({openModal: false}))
    }

    onRemove = () => {
        this.props.startRemoveBlog({id: this.props.blog.id})
        this.props.history.push('/')
    }

    onSubmit = (blog) => {
        this.props.startEditBlog(this.props.blog.id, blog)
        this.props.history.push('/')
    }

    render(){
        return (
            <div>
                <div className="page-header">
                    <h1 className="page-header__title">Edit Blog</h1>
                </div>
                <Blog onSubmit={this.onSubmit} blog={this.props.blog} />
                <div className="container">
                    <button className="newButton" onClick={this.remove}>Remove</button>
                    <Modal 
                        className="modal"
                        ariaHideApp={false}
                        onRequestClose={this.closeModal}
                        isOpen={this.state.openModal}
                        contentLabel='Are you Sure?'
                        closeTimeoutMS={300}>
                        <h3 className="modal__title">Are you sure?</h3>
                        <p className="modal_body">The entry will be deleted permanently.</p>
                        <div className="button-container">
                            <button className="button" onClick={this.onRemove}>Yes</button>
                            <button className="newButton" onClick={this.closeModal}>No</button> 
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

const matchStateToProps = (state, props) => ({
    blog: state.blogs.find((blog) => blog.id === props.match.params.id)
})

const matchDispatchToProps = (dispatch) => ({
    startRemoveBlog: (id) => dispatch(startRemoveBlog(id)),
    startEditBlog: (id, updates) => dispatch(startEditBlog(id, updates))
})

export default connect(matchStateToProps, matchDispatchToProps)(EditBlog)