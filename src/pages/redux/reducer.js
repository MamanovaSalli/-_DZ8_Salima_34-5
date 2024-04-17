const initialState = {
    title: "old title",
    value: '',
    users: []
}

export default function reducer(state = initialState, action) {

    if (action.type === 'CHANGE_TITLE') {
        return {...state, title: 'new title'}
    } else if (action.type === 'INPUT_VALUE') {
        return {...state, value: action.payload}
    } else if (action.type === 'ADD_USER') {
        return {...state, users: [...state.users, action.payload], value: ''}
    } else if (action.type === 'DELETE_USER') {
        return {...state, users: [], value: ''}
    }

    return state
}