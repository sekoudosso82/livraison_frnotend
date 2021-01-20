// initial state
const initialState = {
    delivers: [],
    
    // deliverCard state 
    compagnie: "",
    region: "",
    ville: "",
    telephone: "",
    logo: "ooo",
    
    // notations
    notations: []
}
// methods or const you need to export 
export const fetchDeliversCreator = () => dispatch => {
        fetch("http://localhost:3000/delivers")
        .then(data => data.json())
        .then(delivers => {
            dispatch({ type: 'FETCH_DELIVERS', payload: { delivers}})
        })
}  
export const fetchNotationsCreator = () => dispatch => {
    fetch("http://localhost:3000/notations")
    .then(data => data.json())
    .then(notations => {
        // console.log("notation length", notations.length)
        dispatch({ type: 'FETCH_NOTATIONS', payload: { notations}})
    })
} 



// reducer you need to export 
export const reducer = (prevState = initialState, action) => {
    switch (action.type){
        case 'FETCH_DELIVERS':
            return {...prevState, delivers: action.payload.delivers}
        case 'FETCH_NOTATIONS':
            return {...prevState, notations: action.payload.notations}
        case 'ADD_NEW_NOTATION':
            return { ...prevState, newNotation: action.payload}
        default:
            return {...prevState}
    }
}