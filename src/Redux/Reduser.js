import {GET_SHOP} from "./type";

export const initialState = {
    catalog: [],
    size:[],
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    favorite: [],
    shopList:[],
    products:[]

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD_CATALOG":
            return {...state, catalog: action.payload}
        case "GET_PRODUCTS":
            return {...state,products: action.payload }
        case "UPLOAD_NAVI":
            return {...state, catalog: action.payload}
        case GET_SHOP:
            return {...state, shopList: action.payload}



        case "ADD_TO_BASKET":

            const foundProduct = state.basket.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {
                    ...state, basket: state.basket.map(el => {
                        return el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el
                    })
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
         case "REMOVE_REM": {
            const foundProduct = state.basket.find(el => el.id === action.payload)
            if(foundProduct.quantity > 1){
                return {...state, basket: state.basket.map(el => {
                        return el.id === action.payload ? {...el, quantity: el.quantity - 1} : el
                    })}
            }
        }


        case "REMOVE_BASKET":
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        case "ADD_TO_FAVORITE":
            const favoriteProduct = state.favorite.find(el => el.id === action.payload.id)
            if (favoriteProduct) {
                return {
                    ...state, favorite: [...state.favorite]
                }
            }
            return {...state, favorite: [...state.favorite, action.payload]}

        case "REMOVE_BASKETS":
            return {...state, favorite: state.favorite.filter(el => el.id !== action.payload)}

        default:
            return state
    }
}
