// initial state
const initialState = {
    delivers: [],
    notation: 1
}
// methods or const you need to export 
export const fetchDeliversCreator = () => dispatch => {
        fetch("http://localhost:3000/delivers")
        .then(data => data.json())
        .then(delivers => {
            dispatch({ type: 'FETCH_DELIVERS', payload: { delivers}})
        })
}
// reducer you need to export 
export const reducer = (prevState = initialState, action) => {
    switch (action.type){
        case 'FETCH_DELIVERS':
            return {...prevState, delivers: action.payload.delivers}
        default:
            return {...prevState}
    }
}