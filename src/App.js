import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Cadastro from './Pages/Cadastro/Cadastro';
import TarefaView from './Pages/TarefaView/TarefaView';
import Edicao from './Pages/Edicao/Edicao'

function App() {
  return (
    <div className="app">
      <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Cadastro" component={Cadastro} />
          <Route path="/view/:id" component={TarefaView}/>
          <Route path="/edit/:id" component={Edicao}/>
        </Switch>
      <Footer/>      
    </div>
  );
}

export default App;
