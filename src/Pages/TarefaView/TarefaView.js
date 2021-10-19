import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Api from '../../API/api';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const TarefaView = (props) => {
    const _id = props.match.params.id;
    const [tarefa, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getToDoById();
    }, []);

    const getToDoById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        setTarefa(result);
    }

    const handleDelete = async (evento) => {
        evento.preventDefault();
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        alert(result.message);
        props.history.push('/');
    }

    return (
        <div className="container flex-grow-1">
            <div className="row">
                    <div className="col">
                    <h1 className="text-center mt-4">{tarefa.tarefa}</h1>
                    <h2 className="text-center">{tarefa.prioridade}</h2>
                    <h4 className="text-center">{tarefa.etiqueta}</h4>
                    <h5 className="text-center">{tarefa.status}</h5>
                    <h5 className="text-center">{tarefa.data}</h5>
                    <div className="btn-group mt-3 w-100 d-flex align-items-center justify-content-center">
                        <Link to={`/edit/${tarefa._id}`}  className="btn btn-outline-info">Editar</Link>
                        <button className="btn btn-outline-danger" onClick={onOpenModal}>Excluir</button>
                    </div>
                    </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <h2>Deseja realmente Excluir</h2>
                <button className="btn btn-danger" onClick={onCloseModal}>Não</button>
                <button className="btn btn-success" onClick={handleDelete}>Sim</button>
            </Modal>
            </div>
    )
}

export default TarefaView;
