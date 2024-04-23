import './App.css';
import { useState } from 'react';

function App() {
  function elminarUltimaFila(){
    if(articulos.length>0){
    const temp = Array.from(articulos);
    temp.pop();
    setArticulos(temp);
    }
  }
  const [articulos,setArticulos] = useState([
    {
      codigo: 1,
      descripcion: 'papas',
      precio: 12.42
    },
    {
      codigo: 2,
      descripcion: 'naranjas',
      precio: 21
    },
    {
      codigo: 3,
      descripcion: 'peras',
      precio: 18.20
    }
  ]);
  return (
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>Código</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {articulos.map(art =>{
          return(
            <tr key = {art.codigo}>
              <td>{art.codigo}</td>
              <td>{art.precio}</td>
              <td>{art.descripcion}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    <button onClick={elminarUltimaFila}>Elimina la última fila</button>
  </div>
  );
}

export default App;
