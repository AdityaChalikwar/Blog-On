import {firebase} from '../firebase/firebase'

export const selectMyBlogs = (blogs) => {
    return blogs.filter((blog) => {
        return firebase.auth().currentUser.uid.localeCompare(blog.uid) === 0
    })
}

export const selectBlogs = (blogs, {text, sortBy}) => {
    return blogs.filter((blog) => {
        const textMatch = blog.title.toLowerCase().includes(text.toLowerCase())
        return textMatch
    }).sort((a, b) => {
        if(sortBy === 'date')
            return b.createdAt - a.createdAt
        else{
            return Object.keys(b.reads).length - Object.keys(a.reads).length
        }
    })
}