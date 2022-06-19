import React from 'react';
import {Route, Routes} from "react-router-dom";
import Woman from "../pages/Woman";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Routes>
                <Route path="woman" element={<Woman/>}/>
            </Routes>
        </div>
    );
};

export default Home;