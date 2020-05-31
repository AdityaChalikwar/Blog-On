import database from '../firebase/firebase'

export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
})
export const startAddBlog = (blogData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {title = '', body = '', createdAt = 0, reads = {}} = blogData
        const blog = {title, body, createdAt, uid, reads}
        return database.ref(`blogs`).push(blog).then((ref) => {
            dispatch(addBlog({
                id: ref.key,
                ...blog
            }))
        })
    }
}


export const removeBlog = ({id} = {}) => ({
    type: 'REMOVE_BLOG',
    id
})
export const startRemoveBlog = ({id}) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}`).remove().then(() => {
            dispatch(removeBlog({id}))
        })
    }
}


export const editBlog = (id, updates) => ({
    type: 'UPDATE_BLOG',
    id,
    updates
})
export const startEditBlog = (id, updates) => {
    return (dispatch, getState) => {
        return database.ref(`blogs/${id}`).update(updates).then(() => {
            dispatch(editBlog(id, updates))  
        })
    }
}

export const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs
})
export const startSetBlogs = () => {
    return (dispatch) => {
        return database.ref(`blogs`).once('value').then((snapshot) => {
            const blogs = []
            snapshot.forEach((childSnapshot) => {
                blogs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setBlogs(blogs))
        })
    }
}


export const setReads = (id, uid) => ({
    type: 'SET_READS',
    id,
    uid
})
export const startSetReads = (id, uid) => {
    return (dispatch) => {
        return database.ref(`blogs/${id}/reads`).push(uid).then(() => {
            dispatch(setReads(id, uid))
        })
    }
}