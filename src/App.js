import logo from './logo.svg';
import './App.css';

function retornarNumeroAleatorio(){
  return Math.trunc(Math.random * 10);
}

function App() {
  const siglo = 21;
  const persona = {
    nombre: 'David',
    edad: '17'
  }
  return (
   <div>
    <h1>Título nivel 1</h1>
    <hr/>
    <p>Estamos en el siglo {siglo}</p>
    <h3>Acceso a un objeto</h3>
    <p>{persona.nombre} tiene {persona.edad}</p>
    <h3>LLamada a una función</h3>
    <p>Un valor aleatorio llamando a un método</p>
    {retornarNumeroAleatorio()}
    <h3>Cálculo inmediato de expresiones </h3>
    3 + 3 = {3 + 3}
   </div>
  );
}

export default App;
