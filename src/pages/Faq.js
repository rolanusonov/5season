import React from 'react';
import {Accordion} from "react-faq-acordion";


export default function App() {
    const data = [

        {

            title: "Как сделать заказ?",
            paragraph: "1. Войти или зарегистрироваться\n" +
                "Оформить заказ можно только в личном кабинете. Войдите или зарегистрируйтесь по номеру телефона:Добавить товар в «Корзину»\n" +
                "В карточке товара выберите подходящий размер и нажмите «Добавить в корзину»Перейти в корзину. Для продолжения оформления заказа перейдите в «Корзину».\n" +
                "По клику на кнопку «Перейти в корзину» в карточке товара:"
        },
        {
            title: "Как сделать заказ?",
            paragraph:
                "Как сделать заказ?"
        },
        {
            title: "RКак сделать заказ?",
            paragraph:
                'Как сделать заказ?" '
        },
        {
            title: "Как сделать заказ?",
            paragraph:
                "Как сделать заказ?."
        }
    ];
    return (
        <div className="faqCard">
                 <Accordion data={data}  theme="background: linear-gradient(269.84deg, #FF005C -10.98%, rgba(0, 0, 0, 0.88) 100%);" />
         </div>
    );
}




