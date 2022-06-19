import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, decFromCart} from "../Redux/action";
import {deleteFromBasket} from "../Redux/action";
import {Link} from "react-router-dom";
const TableRow = ({el}) => {
    const dispatch = useDispatch()
    const [details] = useState([])
    const basket = useSelector(s => s.basket)
    const basketItems = basket.some( basket => basket.id === details.id)

    return (
            <tr className="bacroundBasket">
            <td className="py-2 ">
                <Link  to={`/details/${details.id}`}>
                    <img className="tableImg" src={el.img} alt=""/>
                </Link>
            </td>
                <td className="qer qerName text-sm   text-gray-900   dark:text-white">
                    <h3 className="nameWho  NameBasket">
                        {el.name}
                    </h3>
                </td>
            <td   className=" py-4  text-sm  qerPrice  font-medium text-white    dark:text-white">
                 {el.price  * el.quantity}&nbsp;₺


            </td>
            <td className="py-4 text-sm  text-white dark:text-white">
                <div className="diferent">
                    <button
                        onClick={() => {dispatch(addToBasket(el))}}
                        className="text-white plus dark:text-white mx-4 text-2xl ">
                        <p className="pluses">
                            +</p>
                    </button>
                    {el.quantity}
                    <button onClick={() => dispatch(decFromCart(el.id))}
                            className="text-white plus dark:text-white mx-4 text-2xl ">
                        <p className="pluses">
                            -</p>
                    </button>



                </div>

                <button
                    onClick={() => dispatch(deleteFromBasket(el.id))}
                    className="text-white  cres dark:text-white ">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.46458 15.5359L15.5356 8.46484" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M8.46458 8.46409L15.5356 15.5352" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                </button>
            </td>
        </tr>
    );
};

export default TableRow;