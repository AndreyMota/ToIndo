import { useState } from 'react';
import './App.css';

function App() {
  const [imageVisible, setImageVisible] = useState(false);
  const [audio] = useState(new Audio('https://www.myinstants.com/media/sounds/we-live-we-love-we-lie.mp3'));

  const handleClick = () => {
    audio.play();
    setTimeout(() => {
      setImageVisible(true);
    }, 100);
    setTimeout(() => {
      window.location.reload();
    }, 12000);
  };

  return (
    <>
      <h1>Tô indo...</h1>
      <button id='meu-botao' onClick={handleClick}>INDO AONDE</button>

      {imageVisible && (
        <div id='imageContainer' className='visible'>
          <img src="https://progmatico.com.br/media/indo-ali.png" alt="Imagem" />
        </div>
      )}
    </>
  );
}

export default App;
