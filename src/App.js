import './App.css';
import './component/fonts/fonts.css'
import 'animate.css'; 
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
    <AnimatedCursor />
      <div className='container'>
      <h1 className='animate__animatedanimate__start-text '>
        Привет!
      </h1>
      <button className='button-quest'>
        Познакомиться
      </button>
      </div>
    </div>
  );
}

export default App;
