import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom'
import CardComponents from '../../Components/Card';
import { Card, Button, Form,FormControl,ion} from 'react-bootstrap';
import cefet from '../../assets/header.svg';
import icon from '../../assets/location-outline.svg';
import CardData from '../../MockData/CardData.jsx';
import './styles.css';

const Feed = () => {
    return (
        <div className='Feed'>
            <div className='Feed-header'>
                <img src={cefet} className='Feed-img'/>
                
                    <FormControl
                        type="search"
                        aria-label="Search"
                        className='Feed-search' 
                        style={{ width: '25rem', border: '1px solid rgba(0, 0, 0, 0.53)' }}
                    />   
                
                <Button variant="secondary" style={{ background: '#00386B',width: '15rem'}} className='Feed-buttom'>
                        Cadastrar
                </Button>{' '}
                <img src={cefet} className='Feed-buttom-image'/>
            </div>
            <div>
                <CardComponents />
            </div>
        </div>
    );
}

export default Feed;
