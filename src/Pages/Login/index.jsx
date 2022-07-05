import React, { useState } from 'react';
import cefet from '../../assets/logoCEFETMG.svg';
import { Redirect } from 'react-router'
import { useNavigate } from 'react-router-dom';
import dataBaseSigaa from '../../MockData/dataBaseSigga'
import './styles.css';
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom'

export default function Login() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const navigation = useNavigate();
    const Feed = () => {
        if (user === "admin" && pass === "admin") {
            return navigation('/feed')
        }
        else
            return navigation('/')
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
                         onChange={e => setUser(e.target.value)}
                     />
                 </div>
                 <div className='Login'>
                     <input
                         id="password"
                         type="password"
                         name="password"
                         placeholder="Senha"
                         autoComplete="on"
                         value={pass}
                         onChange={e => setPass(e.target.value)}
                     />
                 </div>
                 <div className="Button-login" onClick={Feed}>
                     <button type="submit"  >
                         Login
                     </button>
                 </div>
             </section>
         </main>

     );

}

