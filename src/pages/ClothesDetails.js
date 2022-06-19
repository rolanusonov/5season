import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import DetailColor from "./DetailColor";
import DetailPage from "./DetailPage";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";
import Slider from "react-slick";
import {addToBasket} from "../Redux/action";


const ClothesDetails = ({el}) => {
    const dispatch = useDispatch()
    const {clothesId} = useParams()
    const [details, setDetails] = useState([])
    const {
        img,
        description,
        name,
        price,
    } = details

    useEffect(() => {
        api(`/prod-detail/${clothesId}/`)
            .then(({data}) => {
                setDetails(data)

            })
    }, [])
    const basket = useSelector(s => s.basket)
    const basketItems = basket.find(basket => basket.id === details.id)
    const [size, setSize] = useState("")
    const onChangeValue = (event) => {
        console.log(event.target.value)
        setSize(event.target.value)
    }
    const [color_name, setColor_name] = useState("")
    const onChangeValues = (event) => {
        console.log(event.target.value)
        setColor_name(event.target.value)
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="container" style={{marginTop: "50px"}}>
            <div className="m-10 detailCard  ">
                <div>
                    <img className="ml-14 detail-img" src={img} alt=""/>
                </div>
                <div className="clothesdetails-div">

                    <h1 className=" description"> {name}</h1>
                    <h1 className="text-base priceNIK mt-4 price ">{price} ₺</h1>
                    <p className="tab">Таблица размеров:</p>

                    <div className="flex items-center my-5 detailBTN ">

                        <div className="flex items-center detailBTNs ">
                            <ul className="flex detailBTNs ">
                                {
                                    details?.prod_detail?.map(el => (
                                        <DetailPage onChangeValue={onChangeValue} el={el}/>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <p>Цвет:</p>
                            <div className="sliderDetailOne">
                                <Slider {...settings}>
                                    {
                                        details?.product_detail?.map(el => (
                                            <div key={el.id} className="mx-3">
                                                <img src={el.color} alt="" style={{
                                                    width: "80px",
                                                    height: "95px"
                                                }}/>
                                                <DetailColor onChangeValue={onChangeValues} el={el}/>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="bayBtn">
                            <div className="">
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => {
                                            details.clothSize = size
                                            details.clothName = color_name
                                           return basketItems ? null:  dispatch(addToBasket(details))
                                        }}
                                        className="w-52 h-9 detail-btn rounded-md text-white text-lg mt-5">
                                        {
                                            basketItems ? "Добавлено" : "Добавить в кoрзину"
                                        }
                                    </button>
                                </div>
                                <button style={{border: "solid #72072D\n", color: "#72072D\n"}}
                                    className="w-52 h-9 btn1 rounded-md text-white text-lg mt-5">
                                    <Link to="/basket">
                                        Купить сейчас
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opisaniy">
                    <h1 className=" font-medium text-4xl my-5 ml-6">Описание</h1>
                    <p className="mb-10 detail-p ml-6 "> {description}</p>
                </div>
            </div>
        </div>
    );
};


export default ClothesDetails;
