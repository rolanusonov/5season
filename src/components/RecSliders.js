import React, {useEffect, useState} from 'react';
import RecSlidersItem from "./RecSlidersItem";
import Slider from "react-slick";
import {api} from "../http/api";
import {useSelector} from "react-redux";

const RecSliders = () => {
    const [item, setItem] = useState([])
    const [setItem2] = useState([])
    useEffect(() => {
        api("/rec-list/")
            .then(({data}) => {
                setItem(data)
            })
            .catch(e => {
                console.log(e)
            })
        api("/prod-list/")
            .then(({data}) => {
                setItem2(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    };
    const {basket} = useSelector((store) => store)
    return (
        <>
             {item.map(el => (
                    <div className="rec-sliders"  >
                        <h1 className="req-card">{el.name}</h1>
                        {
                            <div className="req">
                                <Slider {...settings}>
                                    {
                                        el.products.map(sas => (
                                            <RecSlidersItem id={sas}/>
                                        ))
                                    }
                                </Slider>
                            </div>
                        }
                    </div>
                ))
            }
        </>
    );
};

export default RecSliders;