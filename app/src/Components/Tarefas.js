import React, { Component } from "react";
import Axios from "axios";

export default class Tarefas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tarefas : [],
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:3001/tarefas").then(res => {
            this.setState({tarefas:res.data});
        });
    };

    excluir(id) {
        Axios.delete("http://localhost:3001/excluir="+id);
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tarefas.map(items => {
                        return (
                            <tr key={items.id}>
                                <td>{items.tarefa}</td>
                                <td>
                                    <button onClick={()=>{this.excluir(items.id)}} className="btn red">Excluir</button>          
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}