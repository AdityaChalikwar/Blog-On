import React from 'react'
import { setTextFilter, sortByDate, sortByReads } from '../actions/filters'
import { connect } from 'react-redux'

class BlogListFilters extends React.Component{
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onChange = (e) => {
        this.props.sortBy(e.target.value)
    }

    render(){
        return (
            <div className="filter-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            type='text'
                            placeholder='Search Blogs' 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select" 
                            value={this.props.filters.sortBy} 
                            onChange={this.onChange}>
                            <option value='date'>Newest First</option>
                            <option value='reads'>Reads</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const matchStateToProps = (state) => ({
    filters: state.filters
})

const matchDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortBy: (filter) => filter === 'date' ? dispatch(sortByDate()) : dispatch(sortByReads())
})

export default connect(matchStateToProps, matchDispatchToProps)(BlogListFilters)