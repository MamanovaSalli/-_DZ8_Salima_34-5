
const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    const {type} = action;
    if (type === 'INCREMENT') {
        return {
            ...state, count: state.count + 1
        }
    } else if (type === 'DECREMENT') {
        return {
            ...state, count: state.count > 0 ? state.count - 1 : 0
        }
    } else if (type === 'RESET') {
        return {
            count:0
        }
    } else if (type === 'ADD_TEN') {
        return {
            ...state, count: state.count + 10
        }
    }
    return state
}
export default reducer