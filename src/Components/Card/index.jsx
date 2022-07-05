import React from "react";
import Login from "../../Pages/Login";
import CardData from "../../MockData/CardData"
import Step from "../Stepper"
import { Card } from 'react-bootstrap';
import caderno from "../../assets/caderno2.png"
import garrafa from "../../assets/garrafa.jpg"
import guarda_chuva from "../../assets/guarda_chuva.jpg"
import './styles.css';
import { FaMapMarkerAlt } from "react-icons/fa";

const card1 = {
    "objeto": "Caderno",
    "descrição": "123456",
    "local": "Predio 20",
    "data": "28/05/2022 às 22:32",
    "img": caderno,
    "position": 1
};

const card2 = {
    "objeto": "Garrafa",
    "descrição": "123456",
    "local": "Predio 20",
    "data": "28/05/2022 às 22:32",
    "img": garrafa,
    "position": 1
};

const card3 = {
    "objeto": "Guarda-chuva",
    "descrição": "123456",
    "local": "Predio 20",
    "data": "28/05/2022 às 22:32",
    "img": guarda_chuva,
    "position": 2
};
const card4 = {
    "objeto": "lapis",
    "descrição": "123456",
    "local": "Predio 20",
    "data": "28/05/2022 às 22:32",
    "img": guarda_chuva,
    "position": 2
};

CardData.add(card2);
CardData.add(card2);
CardData.add(card3);
CardData.add(card3);
CardData.add(card2);
CardData.add(card3);
CardData.add(card3);
CardData.add(card2);
CardData.add(card2);
CardData.add(card3);
CardData.add(card2);
CardData.add(card3);
CardData.add(card4)

export default function CardComponent(props) {
    console.log(props.search)
    //var s = "foo";
    //alert(s.indexOf("l0"));
    return (
        <div className="Card">
            {
                props.cards.map(n =>
                    <div>
                    {
                       n.objeto.toLowerCase().indexOf(props.search.toLowerCase()) != -1
                            ? (<Card style={{ width: '18rem' }} className="Card-Component" >
                                <Card.Body className="Card-Body">
                                    <Card.Title className="Card-titulo" >{n.objeto}</Card.Title>
                                    <Card.Img variant="top" src={n.img} className="Card-imagem" />
                                    <div className="Card-titulo-local">
                                        <Card.Text >
                                            <FaMapMarkerAlt />
                                            {n.local}
                                        </Card.Text>
                                    </div>
                                    <Step position={n.position} />
                                    <Card.Text className="Card-data">
                                        {n.data}
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                            : props.search === '' && n.objeto.toLowerCase().indexOf(props.search.toLowerCase()) == -1
                                ? (<Card style={{ width: '18rem' }} className="Card-Component" >
                                    <Card.Body className="Card-Body">
                                        <Card.Title className="Card-titulo" >{n.objeto}</Card.Title>
                                        <Card.Img variant="top" src={n.img} className="Card-imagem" />
                                        <div className="Card-titulo-local">
                                            <Card.Text >
                                                <FaMapMarkerAlt />
                                                {n.local}
                                            </Card.Text>
                                        </div>
                                        <Step position={n.position} />
                                        <Card.Text className="Card-data">
                                            {n.data}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>)
                                : <p></p>
                    }
                    </div>
                )
            }
        </div>

    )
}

