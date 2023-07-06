
import './App.css';
function App() {
function procesarDato(data) {
  var res = document.getElementById("resultados");//REVISAR BIEN EL ID
  //innerHTML retorna con etiquetas <div> //innerText retorna en texto
  res.innerHTML = data;
}
function verificarEstado(response) {  //recibe la respuesta
  if (!response.ok) {
    throw Error("Ocurrio un error: " + response.statusText); //mostrar en texto el error que ocurrio
  }
  return response;
}
function handleError(error) {
  console.log("Ocurrio un error: " + error);
}
function handleClick() {
  var codigo = document.getElementById("codigo").value;
  var nombre = document.getElementById("nombre").value;
  var precio = document.getElementById("precio").value;
  var cantidad = document.getElementById("cantidad").value;

  
  const URL = "http://localhost:3001/insertar-producto?codigo=" + codigo + "&nombre=" + nombre +"&cantidad="+cantidad+"&precio="+precio;
  fetch(URL)
    .then(verificarEstado) //verificar estatus
    .then(response => response.text()) // extraer la data , retornar un texto
    .then(procesarDato) //prorcesar dato
    .catch(handleError);
}

  return (
    <div className="App">
      <label>codigo</label>
      <input type="text" name="codigo" id="codigo"></input>
      <label>nombre</label>
      <input type="text" name="nombre" id="nombre"></input>
      <label>precio</label>
      <input type="number" name="precio" id="precio"></input>
      <label>cantidad</label>
      <input type="number" name="cantidad" id="cantidad"></input>
      <button onClick={handleClick}>Enviar</button>
      <div id="resultados"></div>
    </div>
  );
}

export default App;
