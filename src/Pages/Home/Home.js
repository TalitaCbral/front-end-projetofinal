import React from "react";
import List from '../../Components/Structure/List/List';
import './Home.css';

const Home = () => {
    return (
        <div className="container home">
            <h1 className="text-center">Lista de Tarefas</h1>
            <List/>
        </div>
    )
}

export default Home
