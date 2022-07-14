//const image = 
import React,{ useState } from 'react';
import CardComponents from '../../Components/Card';
import { Button,FormControl} from 'react-bootstrap';
import cefet from '../../assets/header.svg';
import ney from '../../assets/ney.jpg';
import './styles.css';
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import CardData from "../../MockData/CardData"
import {ArrowClockwise} from 'phosphor-react'
import UserR from '../../MockData/user';
import User from '../../Models/User'
import {Link} from 'react-router-dom';

class Feed  extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            clickSeach: false,
            
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        console.log(target);
        const value = target.type === "file" ? target.files[0] : target.value
        this.setState({
            [target.name]: value
        });
    }
   
    render() {
        const Cards = CardData.get()
        //const Image = User.prototype.getNome()
        const clickSearch = this.state.search
        var storedArray = localStorage.getItem("userData");
        var ImageUser = JSON.parse(storedArray);
        return (
            <div className='Feed'>
                <div className='Feed-header'>
                    <img src={cefet} className='Feed-img' />
                    <div style={{ display: 'flex' }}>
                        <FormControl
                            name="search"
                            type="text"
                            aria-label="Search"
                            className='Feed-search'
                            style={{ width: '25rem', border: '1px solid rgba(0, 0, 0, 0.53)' }}
                            value={this.state.search}
                            onChange={this.handleInputChange}
                        />
                        <Button style={{ width: '2rem', border: '1px solid rgba(0, 0, 0, 0.53)', margin: '5px', background: "#FFFFFF" }} onClick={() => {
                                            this.render()
                                        }}>
                            <ArrowClockwise size={25} />

                        </Button>{' '}
                    </div>
                    <Link to={`/register`}>
                        <Button variant="secondary" style={{ background: '#00386B', width: '15rem' }} className='Feed-buttom' >
                            Cadastrar
                        </Button>{' '}
                    </Link>                   
                    <Link to={`/profile/${UserR.matricula}`}>
                        <img src={ ImageUser.imagem } className='Feed-buttom-image' />
                    </Link>
                </div>
                <div>
                    <CardComponents cards = {Cards} search = {this.state.search}/>
                </div>
            </div>
        );
    }
}

export default Feed;
