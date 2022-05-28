import React from "react";
import Index from "../Pages/Index";
import CardData from "../MockData/CardData"
import { Cards, Button } from 'react-bootstrap';
const Card = () => {
    const card1 =
    {
        "objeto": "lucas1",
        "descrição": "123456",
        "local": "",
        "data": ""
    }
    CardData.add(card1)
    return (

        <div>
            
        </div>

    )

}

export default Card;
/*
 return (
        <div>
            {
                CardData.get().map(n => 
                <div>
                    <h1> {n.objeto}</h1>
                    <p>{n.descrição}</p>
                    <p>{n.local}</p>
                    <p>{n.data}</p>
                </div>
                )
            }
        </div> 
    )
*/