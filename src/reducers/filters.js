const defaultFiltersState = {
    text: '',
    sortBy: 'date'
}
export default (state = defaultFiltersState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_READS':
            return {
                ...state,
                sortBy: 'reads'
            }
        default:
            return state
    }
}