import React, { useEffect, useState } from "react";
import Api from '../../API/api'

const Edicao = (props) => {
    const _id = props.match.params.id;
    const history = props.history;

    const [tarefa, setTarefa] = useState({});

    useEffect(()=>{
        getTarefaById();
    }, []);

    const getTarefaById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();

        setTarefa(result);
    };

    const handleFieldsChange = (event) => {
        // clono meu objeto do estado
        const campos = { ...tarefa };
        // para cada input eu atualizo o seu respectivo valor no obj
        campos[event.target.name] = event.target.value;
    
        // atualizo o meu estado com esse novo objeto.
        setTarefa(campos);
    };
    
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        // faco uma copia do estado com obj atualizado.
        const tarefaObj = { ...tarefa };
        // transforma o salario em inteiro.
        tarefaObj.etiqueta = parseInt(tarefaObj.etiqueta);
        try {
        const response = await Api.fetchPut(tarefaObj, _id);
        const result = await response.json();
        alert(result.message);
        history.push("/"); // forca o historico a voltar para a rota de / => home
        } catch (error) {
        console.log(error);
        }
    
    };



    return (
        <div className="container cadastro">
        <div className="card mt-4">
            <div className="card-title">
            <div className="row">
                <div className="col">
                <h3>Edição da Tarefa</h3>
                </div>
            </div>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input
                        type="text"
                        value={tarefa.tarefa}
                        className="form-control"
                        name="titulo"
                        id="floatingInput"
                        placeholder="Digite o Titulo"
                        onChange={handleFieldsChange}
                    />
                    <label htmlFor="floatingInput">Titulo</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                    <input
                        type="text"
                        value={tarefa.etiqueta}
                        className="form-control"
                        name="etiqueta"
                        id="floatingsalario"
                        placeholder="Digite a Etiqueta"
                        onChange={handleFieldsChange}
                    />
                    <label htmlFor="floatingsalario">Etiqueta</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input
                        type="text"
                        value={tarefa.prioridade}
                        className="form-control"
                        name="prioridade"
                        id="floatingInput"
                        placeholder="Digite a Prioridade"
                        onChange={handleFieldsChange}
                    />
                    <label htmlFor="floatingInput">Prioridade</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                    <select value={tarefa.status}
                        className="form-control"
                        name="status"
                        id="floatingstatus"
                        value={tarefa.status}
                        onChange={handleFieldsChange}
                        >
                        <option value="não iniciada">não iniciada</option>
                        <option value="iniciada">iniciada</option>
                        <option value="Concluida">Concluida</option>
                    </select>
                    <label htmlFor="floatingstatus">status</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <button className="btn btn-success" type="submit">
                    Enviar
                    </button>
                    <button className="btn btn-outline-default">Voltar</button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}

export default Edicao