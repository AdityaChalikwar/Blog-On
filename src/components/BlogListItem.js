import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'
import { startSetReads } from '../actions/blogs'
import { firebase } from '../firebase/firebase'

class BlogListItem extends React.Component{
    constructor(props){
        super(props)
    }
    addReads = () => {
        if(Object.values(this.props.reads).indexOf(firebase.auth().currentUser.uid) <= -1)
            this.props.startSetReads(this.props.id, firebase.auth().currentUser.uid)
    }

    render(){
        return (
            <Link 
                to={`/read/${this.props.id}`} 
                onClick={this.addReads} 
                className="list-item" 
                target="_blank">
                <div className="list-item__data">
                    <h4 className="list-item__title">{this.props.title}</h4>
                    <p className="list-item__body">{this.props.body}</p>
                    <span className="list-item__subtitle">Published on {
                        moment(this.props.createdAt).format('MMM Do, YYYY. h:mm A')}</span>
                </div>
                <h4 className="show-for-mobile">Reads : {Object.keys(this.props.reads).length}</h4>
                <h4 className="show-for-desktop">{Object.keys(this.props.reads).length}</h4>
            </Link>
        )
    }
}

const matchDispatchToProps = (dispatch) => ({
    startSetReads: (id, uid) => dispatch(startSetReads(id, uid))
})

export default connect(undefined, matchDispatchToProps)(BlogListItem)