import './App.css';
import Card from "./Card.js";

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="Primer h2: Mala puta em deus pasta" h3="Primer h3: No tinc pasta curt de gambals"/>
      <Card h2="Segon h2: No m'agrada la mermelada" h3="Segon h3: Les costelles estan mal fetes"/>
      <Card h2="Tercer h2: Poca-solta ens estan robant" h3="Tercer h3: Són enriquidors culturals"/>
      <img src={require("./Assets/jojo.png") } alt="jojo"/>
    </div>
  );
}

export default App;
