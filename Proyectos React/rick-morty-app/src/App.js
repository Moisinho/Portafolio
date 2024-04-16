import imageRickMorty from './img/rick-morty.png'
import logo from './logo.svg';
import './App.css';

function App() {

const reqApi = async () =>{
  console.log("Clicking")
}

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
        <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
