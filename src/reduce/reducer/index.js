const initialState = {
    cart:{
        favouriteJob:[]
    }
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD-TO-FAVOURITE":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    favouriteJob: [...state.cart.favouriteJob, action.payload]
                }
                
            }
        case "REMOVE-FROM-FAVOURITE":
            return{
                ...state,
                cart: {
                    ...state.cart,
                    favouriteJob: state.cart.favouriteJob.filter((_, i) => i !== action.payload)
                }
            }
        default: 
        return state
    }
}

export default mainReducer