import React from 'react';
import {Link} from "react-router-dom";

const Card = ({el}) => {
    return (
        <div className="  bg-gray-#FF005C rounded-xl  black_caard  mx-6 ml-16 dark:border-white-900">
            <Link to={`/categories/${el.id}`}>
                <img className="p-2 carding dark:bg-white-500" src={el.img} alt="product image!!!"/>
            </Link>
            <Link to={`/categories/${el.id}`} className="svg">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white title flex items-center " style={{color:"white"}}
                >{el.title}
                    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className="ml-4">
                        <path d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.2929L18.3431 0.928934C17.9526 0.538409 17.3195 0.538409
                    16.9289 0.928934C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805
                     16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM-8.74228e-08 9L24 9L24 7L8.74228e-08
                     7L-8.74228e-08 9Z" fill="white"/>
                    </svg>
                </h5>
            </Link>
        </div>
    );
};

export default Card;
