import React from "react";
import Login from "../../Pages/Login";
import CardData from "../../MockData/CardData"
import Step from "../Stepper"
import { Card, Button } from 'react-bootstrap';
import teste from "../../assets/logoCEFETMG.svg"
import './styles.css';
const card1 =
    {
        "objeto": "lucas1",
        "descrição": "123456",
        "local": "predio 20",
        "data": "28/05/2022 às 22:32"
    }
    const card2 =
    {
        "objeto": "lucas2",
        "descrição": "123456",
        "local": "predio 20",
        "data": "28/05/2022 às 22:32"
    }
    const card3 =
    {
        "objeto": "lucas3",
        "descrição": "123456",
        "local": "predio 20",
        "data": "28/05/2022 às 22:32"
    }
    CardData.add(card1)
    CardData.add(card2)
    CardData.add(card3)
const CardComponent = () => {
    
    return (
        <div className="Card">
            {
                CardData.get().map(n =>
                    <div >
                        <Card style={{ width: '18rem' }} className="Card-Component" >
                            <Card.Body>
                                <Card.Title className="Card-titulo" >{n.objeto}</Card.Title>
                                <Card.Img variant="top" src={teste} className="Card-imagem" />
                                <div className="Card-titulo-local">
                                    <Card.Text>
                                        {n.local}
                                    </Card.Text>
                                </div>
                                <Step/>
                                <Card.Text className="Card-data">
                                        {n.data}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            }
        </div>

    )

}

export default CardComponent;
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