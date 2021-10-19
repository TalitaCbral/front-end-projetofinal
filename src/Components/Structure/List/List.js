import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Api from "../../../API/api";

const List = () => {
    const [tarefas, setTarefas] = useState([]);
    
    useEffect(() => {
        getToDo();
    }, []);

    const getToDo = async () => {
        const response = await Api.fetchGetAll();
        const data = await response.json();
        setTarefas(data);
    };

    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-3'>
            {
                tarefas.map((tarefa, index)=>(
                    <Card data={tarefa} key={index}/>
                ))
            }
            
        </div>
    )
}

export default List

