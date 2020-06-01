import uuid from 'uuid'

const blogsDefaultState = []
export const blogsReducer = (state = blogsDefaultState, action) => {
    switch(action.type){
        case 'ADD_BLOG':
            return [...state, action.blog]
        case 'REMOVE_BLOG':
            return state.filter(({id}) => id !== action.id)
        case 'UPDATE_BLOG':
            return state.map((blog) => 
                blog.id === action.id ? {
                    ...blog, ...action.updates
                } : blog
            )
        case 'SET_BLOGS':
            return action.blogs
        case 'SET_READS':
            return state.map((blog) => {
                    const id = uuid()
                    if(blog.id === action.id){
                        (blog.reads)[uuid()] = action.uid
                        return blog
                    }else 
                        return blog
                }
            )
        default:
            return state
    }
}