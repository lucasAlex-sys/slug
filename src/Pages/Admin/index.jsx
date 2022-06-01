import "./styles.css";
import React from 'react';
import AdminController from "../../Controller/AdminController";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            code: "",
            object: null,
            user: null,
            matricula: ''
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
        if (this.state.user != null)
            this.setState({ user: null })
    }
    changeObjectState() {
        console.log(this.state.object.id);
        if (this.state.object.state == "Entregue") {
            AdminController.editObject(this.state.object.id, this.state.matricula);
        } else {
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
    showUser() {
        return (
            <div id="tableUser">
                <TableContainer
                    id="table"
                    component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="center">Objeto</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Matricula</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.user.achados.sort(function (a, b) {
                                return a.status.localeCompare(b.status)
                            }).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.objeto}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                    <TableCell align="center">{row.matricula}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
        } else if (this.state.object.state == "Entregue") {
            return (
                <div id="entregarDiv">
                    <input
                        onChange={e => this.setState({ matricula: e.target.value })}
                        type="text"
                        placeholder="Matricula"
                    />
                    <button id="entregarBtn" onClick={this.changeObjectState}>Entregar</button>
                </div>

            );
        } else {
            return (
                <p id="devolvido">Objeto devolvido para {this.state.object.matricula}</p>
            )
        }
    }
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (this.state.code.startsWith("#")) {
                this.setState({ object: AdminController.getObjectFromCode(this.state.code) })
            }
            else {
                this.setState({ user: AdminController.getObjectsFromUser(this.state.code) })
            }
        }
    }
    render() {
        return (<main id="mainPage">
            <h1>Admin Painel</h1>
            <input
                id="codeInput"
                onKeyDown={this.handleKeyDown}
                autoComplete="off"
                placeholder="#ID ou matrícula"
                onChange={e => {
                    this.verifyInput()
                    this.setState({ code: e.target.value })
                }} />
            {this.state.object == null ? <React.Fragment /> : this.showObject()}
            {this.state.user == null ? <React.Fragment /> : this.showUser()}
        </main>)
    }
}


export default Admin