import React from "react";
import { Link } from 'react-router-dom';

const Card = (props) => {
    const tarefa = props.data;
    return (
        <Link to={`/view/${tarefa._id}`} className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{tarefa.tarefa}</h5>
                    <span>{tarefa.prioridade}</span>
                    <span>{tarefa.etiqueta}</span>
                    <span>{tarefa.status}</span>
                    <span>{tarefa.data}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card;