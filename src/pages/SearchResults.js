import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";

const SearchResults = () => {
    const [result, setResult] = useState([])
    const {search} = useParams()
    const basket = useSelector(s => s.basket)
    const basketItems = basket.some( basket => basket.id === result.id)
    useEffect(() => {
        api(`/prod-list?name=${search}`)
            .then(({data}) => {
                try {
                    setResult(data)
                } catch (error) {
                }
            })
    }, [])
    const dispatch = useDispatch()
    return (
        <>
            <div className="SEARCH">
                {result.map(el => (
                        <div className=" searchDiv">
                            <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
                                <Link to={`/details/${el.id}`}>
                                    <img src={el.img} alt="Картинка"/>
                                    <h1>{el.name}</h1>
                                    <h1 style={{fontSize: "24px", color: "#FF005C"}}>{el.price} ₺</h1>
                                <button style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
                                        className="develop searchBtn">{
                                    basketItems ? "Посмотрено" : "Посмотреть"
                                }</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );
};

export default SearchResults;