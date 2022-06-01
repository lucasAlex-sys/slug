import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import './styles.css';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            object: '',
            description: '',
            local: "P",
            image: null
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

    changeVisibilityOfImage() {

    }

    render() {
        return (
            <body>
                <h1>Cadastro de objeto</h1>
                <div id="form">
                    <form>
                        <p>
                            <input
                                name="object"
                                type="text"
                                placeholder="Objeto"
                                value={this.state.object}
                                onChange={this.handleInputChange} />
                        </p>

                        <p>
                            <textarea
                                name="description"
                                cols="50"
                                rows="4"
                                placeholder="Descrição"
                                value={this.state.description}
                                onChange={this.handleInputChange} />
                        </p>
                        <p>
                            <div id="location">
                                <div id="icon">
                                    <FaMapMarkerAlt />
                                    <p>Local</p>
                                </div>
                                <select name="local" value={this.state.local} onChange={this.handleInputChange}>
                                    <option value="P20">P20</option>
                                    <option value="P19">P19</option>
                                    <option value="P18">P18</option>
                                    <option value="P17">P17</option>
                                    <option value="P08">P08</option>
                                    <option value="P09">P09</option>
                                    <option value="P05">P05</option>
                                    <option value="P04">P04</option>
                                    <option value="P">Principal</option>
                                </select>
                            </div>
                        </p>
                        <p id="imageSector">
                            <div >
                                {this.state.image && (
                                    <div id="showImage">
                                        <img alt="not fount" src={URL.createObjectURL(this.state.image)} />
                                        <button onClick={() => {
                                            this.changeVisibilityOfImage()
                                            this.setState({ ["image"]: null })
                                        }}>Excluir</button>
                                    </div>
                                )}
                            </div>
                           
                            <div id="selectImage" style={{ display: this.state.image === null ? 'flex' : 'none' }}>
                            <input
                                        id="upload"
                                        type="file"
                                        name="image"
                                        value=""
                                        style={{ display: this.state.image === null ? 'flex' : 'none' }}
                                        onChange={(event) => {
                                            this.handleInputChange(event)
                                        }}
                                    />
                            </div>
                        </p>

                        <button type="submit"  >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </body>
        );
    }
}

export default Register