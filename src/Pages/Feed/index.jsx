import React,{ useState } from 'react';
import CardComponents from '../../Components/Card';
import { Button,FormControl} from 'react-bootstrap';
import cefet from '../../assets/header.svg';
import ney from '../../assets/ney.jpg';
import './styles.css';
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Feed  = () => {   
    const [inputSearch, setUser] = useState("")
    const navigation = useNavigate()
    function pagCadastrar() {
        return navigation('/Register')
    } 
   
    return (
        <div className='Feed'>
            <div className='Feed-header'>
                <img src={cefet} className='Feed-img'/>
                <div style={{display:'flex'}}>
                    <FormControl
                        type="search"
                        aria-label="Search"
                        className='Feed-search' 
                        style={{ width: '25rem', border: '1px solid rgba(0, 0, 0, 0.53)' }}
                        value={inputSearch}
                        onChange={e => setUser(e.target.value)}
                    />
                    <Button  style={{ width: '2rem', border: '1px solid rgba(0, 0, 0, 0.53)', margin:'5px',background: "#FFFFFF"  }} >
                        <FaSistrix   /> 
                    </Button>{' '}
                </div>     
                <Button variant="secondary" style={{ background: '#00386B',width: '15rem'}} className='Feed-buttom' onClick={pagCadastrar}>
                        Cadastrar
                </Button>{' '}
                <img src={ney} className='Feed-buttom-image'/>
            </div>
            <div>
                <CardComponents />
            </div>
        </div>
    );
}

export default Feed;
