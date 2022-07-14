import React, { useState,useContext } from 'react';
import cefet from '../../assets/logoCEFETMG.svg';
import { useNavigate } from 'react-router-dom';
import loginOnSigaa from '../../Services/Login'
import User from '../../Models/User'
import decode from "jwt-decode";
import  {isAuthenticated}  from '../../Services/Auth';
import './styles.css';


export default function Login() {
    const [user, setUser] = useState("")
    const [password, setPass] = useState("")
    const [status,setStatus] = useState(200)
    const [dataUser,setValue] = useState("")
    const navigation = useNavigate();
    const Feed = async () => {
        console.log("ini")
        try{
            const userData = await loginOnSigaa(user,password)
            User.prototype  = new User(userData.data.user.image,userData.data.user.name,userData.data.user.registration,userData.data.token)
            localStorage.setItem('userData', JSON.stringify(User.prototype));
            isAuthenticated(userData.data.token)
            setStatus(userData.status)
            return navigation('/feed')
            
        }
        catch(err){
            setStatus(400)
            return navigation('/')
        }
        
    }
    return (
        <main className="App-main">
            <section className="App-main-left">
                <h1> Achados & Perdidos</h1>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            </section>
            <section className="App-main-rigth">
                {
                    status === 200
                        ? (
                            <div>
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
                                        value={password}
                                        onChange={e => setPass(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div>
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
                                        value={password}
                                        onChange={e => setPass(e.target.value)}
                                    />
                                </div>
                                <div className='Mensagem'>
                                    <p>Senha ou usuário incorreto</p>
                                </div>
                            </div>
                        )
                }
                <div className="Button-login" >

                    <button type="submit"  onClick={Feed}>
                        Login
                    </button>

                </div>
            </section>
        </main>

    );

}

