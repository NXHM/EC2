import './App.css';
import TablaImagenes from './TablaImagenes.js';
function App() {
  const imagenes = ["images/images/ade.png","images/images/atr.png","images/images/der.png","/images/images/izq.png"];
  return (
    <TablaImagenes prop={imagenes}></TablaImagenes>
  );
}

export default App;
