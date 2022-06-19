import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import {useDispatch} from "react-redux";
import RecSliders from "../components/RecSliders";
import {api} from "../http/api";
import AccordionBlock from "../components/Accordion";

const Catalog = () => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/category-list/")
            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
    console.log(catalog,"rolan")
    return (
        <div className="container mx-auto" >
            {catalog.length === 0 ? (<div className="Loading">
                <div className="loading ">
                    <div className="lds-spinner">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>) :
            <div>

            </div>
        }
        
        <div className="grid catalogSET sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  pt-[50px] ">
            {
                catalog.map(el => (
                    <Card el={el} key={el.id}/>
                ))
            }
        </div>
            <RecSliders/>
            <AccordionBlock/>
            <div style={{height:"20px"}}>

            </div>
        </div>
    );
};
export default Catalog;