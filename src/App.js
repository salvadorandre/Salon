import Menu from './Componentes/Menu';
import './App.css';
import Bienvenida from './Componentes/Bienvenida';
import RedesSociales from './Componentes/RedesSociales';
function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Bienvenida></Bienvenida>
      <RedesSociales></RedesSociales>
    </div>
  );
}

export default App;
