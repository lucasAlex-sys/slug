import "./styles.css";
import React, { useState, useEffect } from 'react';
import AdminController from "../../Controller/AdminController";

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            code: "",
            object: null,
            matricula:''
        };
        this.verifyInput = this.verifyInput.bind(this)
        this.changeObjectState = this.changeObjectState.bind(this)
        this.showObject = this.showObject.bind(this)
        this.actions = this.actions.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    verifyInput() {
        if (this.state.object != null)
            this.setState({ object: null })
    }
    changeObjectState() {
        console.log(this.state.object.id);
        if(this.state.object.state=="Entregue"){
            AdminController.editObject(this.state.object.id,this.state.matricula);
        }else{
            AdminController.editObject(this.state.object.id);
        }
        this.setState({ object: AdminController.getObjectFromCode(`#${this.state.object.id}`) })
        console.log(this.state.object);

    }
    showObject() {
        return (
            <div>
                <h1>{this.state.object.object}</h1>
                <h3>{this.state.object.description}</h3>
                <img src={this.state.object.image} width={250} />
                {this.actions()}
            </div>
        )
    }
    actions() {
        console.log("showobject");
        console.log(this.state.object.state);
        if (this.state.object.state == "Achado") {
            return (
                <div id="achado">
                    <button id="achadoBtn" onClick={this.changeObjectState}>Recebido</button>
                </div>
            )
        }else if(this.state.object.state == "Entregue") {
            return (
                <div id="entregarDiv">
                    <input 
                    onChange={e=>this.setState({ matricula: e.target.value })}
                    type="text"
                    placeholder="Matricula"
                    />
                    <button id="entregarBtn" onClick={this.changeObjectState}>Entregar</button>
                </div>

            );
        }else{
            return (
                <p id="devolvido">Objeto devolvido para {this.state.object.matricula}</p>
            )
        }
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.setState({ object: AdminController.getObjectFromCode(this.state.code) })
        }
    }
    render() {
        return (<main id="mainPage">
            <h1>Admin Painel</h1>
            <input
                id="codeInput"
                onKeyDown={this.handleKeyDown}
                autoComplete="off"
                onChange={e => {
                    this.verifyInput()
                    this.setState({ code: e.target.value })
                }} />
            {this.state.object == null ? <React.Fragment /> : this.showObject()}
        </main>)
    }
}


export default Admin