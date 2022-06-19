import React from "react";
import {Accordion} from "react-faq-acordion";
import data from "./faqData";

const AccordionBlock = () => {
    return (
        <div className="Porque">
            <Accordion
                className=" personIK "
                data={data}
                theme="background: linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%);"/>
        </div>
    )
}
export default AccordionBlock