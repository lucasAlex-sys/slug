import React, {useState} from 'react';
import cefet from '../logoCEFETMG.svg';
import { Redirect } from 'react-router'
import {  useNavigate  } from 'react-router-dom';
import dataBaseSigaa from '../MockData/dataBaseSigga.jsx'

const Index = () => {
    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const navi = useNavigate();
    function teste (){
        if(user==="lucas" && pass ==="lucas"){
         return navi('/feed')
        } 
        else
            return navi('/')
    }
    return (
        
        <main className="App-main">
            <section className="App-main-left">
            <h1> Achados & Perdidos</h1>
            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            </section>
            <section className="App-main-rigth">
            <div className="Img-logo-cefet">
            <img src={cefet} />
            </div>
            <div className="Login">
                <input 
                id="user"
                type="text"
                name="user"
                placeholder="Usuário"
                value={user}
                onChange= {e => setUser(e.target.value)}
                />
            </div>
            <div className='Login'>
            <input 
                id="password"
                type="password"
                name="password"
                placeholder="Login"
                value={pass}
                onChange= {e => setPass(e.target.value)}
                />
            </div>
            <div className="Button-login" onClick={teste}>
                <button type="submit"  >
                    Login
                </button>
            </div>
            </section>
        </main> 
    );
}

export default Index;
