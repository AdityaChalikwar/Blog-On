import React from 'react'
import BlogList from '../components/BlogList'
import BlogsListFilters from './BlogsListFilters'

const Dashboard = () => (
    <div>
        <BlogsListFilters />
        <BlogList />
    </div>
)

export default Dashboard