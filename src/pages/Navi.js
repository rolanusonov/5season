import React, {useEffect, useState} from 'react';
import Man from "./Man";
import {api} from "../http/api";

const Navi = () => {
    const [navi, setNavi] = useState([])
    useEffect(() => {
        api("/prod-detail/")
            .then(({data}) => {
                setNavi(data)
            })
    }, [])
    return (
        <div>
            <div className="handle flex items-center justify-center p-10  ">
                {
                    navi.map(el => (
                        <Man el={el} key={el.id}/>
                    ))
                }
                {
                    navi.products?.map(el => (
                        <div key={el.id} className="mx-3">
                            <h1>{el.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Navi;
