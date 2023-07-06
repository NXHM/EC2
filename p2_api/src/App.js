import './App.css';

function App() { // function App() { ... } is a component
  function handleClick(){
    let url='https://www.boredapi.com/api/activity/';
    fetch(url)
      .then(response => response.json())// texto_plano = response.text()
      .then(procesarDato)
      .catch(error => console.error(error));
      //.then(data => setUsers(data.results));
  }
  function procesarDato(data){
    var resultados=document.getElementById("resultados");
    var nombre=document.getElementById("nombre").value;
    resultados.innerHTML=`Hola ${nombre}, te recomiendo la actividad del tipo ${data.type} que consiste en ${data.activity}. En esta actividad pueden participar ${data.participants} personas.`;
  }
  return (
    <div className="App">
      
      Nombre: <input type="text" id="nombre"></input><br/>
      
      <button onClick={handleClick}>Enviar datos</button>
      <div id="resultados"></div>
    </div>
  );
}

export default App;
