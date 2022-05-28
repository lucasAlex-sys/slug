import React from "react";
import Index from "../Pages/Index";
import CardData from "../MockData/CardData"
const Card = () =>{
    
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
    
}

export default Card;
