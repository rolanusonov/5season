import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {api} from "../http/api";



const RecSlidersItem = ({id}) => {
    const [details, setDetails] = useState([])
    const dispatch = useDispatch()
    const basket = useSelector(s => s.basket)
    const basketItems = basket.some( basket => basket.id === details.id)
    useEffect(async ()  => {
        await api(`/prod-detail/${id}/`)
            .then(({data}) => {
                setDetails(data)
            })
    }, [])

    return (
        <div className="recCard">
            <div className="basket-card      ">
                <Link className=""  to={`/details/${details.id}`}>
                    <div className="school">
                        <img className="imgSlider" src={details.img} alt=""/>
                    </div>
                    <div className="schoolH1">
                        <h1 style={{
                            height:"90px",
                            overflow:"hidden"
                        }}>{details.name}</h1>
                        <h1 className="schoolPrice" style={{fontSize: "24px", color: "#FF005C"}}>{details.price} ₺</h1>
                    </div>
                </Link>
                <Link to={`/details/${details.id}`}>
                <button
                    className="w-36 ert   h-9 rounded-md text-white text-lg mt-5">
                    {
                        basketItems ? "Посмотрено " : "Посмотреть"
                    }
                </button>
                </Link>
            </div>
        </div>

    );  
};

export default RecSlidersItem;