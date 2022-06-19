import {GET_SHOP} from "./type";
import {api} from "../http/api";
import axios from "axios";


export const getShop = () => {
    return (dispatch) => {
        api(`/category-list/`)
            .then(({data}) => {
                dispatch({type: GET_SHOP, payload: data})
            })
    }
}


export const getProducts = () => {
    return async dispatch => {
        const url = await axios("https://api.tez-shop.com.kg/prod-list")
        const {data} = await url
        await dispatch({type: "GET_PRODUCTS", payload: data})
    }
}

export const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const foundProduct = basket.find(elFind => elFind.id === product.id)
    if (foundProduct) {
        basket = basket.map(item => item.id === product.id ?
            {...item, quantity: item.quantity + 1} : item)
    } else {
        basket = [...basket, {...product, quantity: 1}]
    }
     localStorage.setItem("basket", JSON.stringify(basket))
    return {type: 'ADD_TO_BASKET', payload: product}
}
export const deleteFromBasket = (id) =>{
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    basket = basket.filter(el  =>el.id !==id)
    localStorage.setItem("basket",JSON.stringify(basket))
    return{type:"REMOVE_BASKET" ,payload:id}
}

export const decFromCart = (id) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || []
    const foundProduct = basket.find(el => el.id ===id)
    if(foundProduct.quantity > 1){
        basket = basket.map(el => {
            return el.id === id ? {...el, quantity: el.quantity - 1}: el
        })
        localStorage.setItem("basket", JSON.stringify(basket))
        return {type: "REMOVE_REM", payload: id}

    }

}
