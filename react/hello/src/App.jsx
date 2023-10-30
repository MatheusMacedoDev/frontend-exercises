import { useState } from "react";
import './App.css';
import Title from './components/Title/Title';
import EventCard from './components/EventCard/EventCard';
import Container from './components/Container/Container';
import Counter from './components/Counter/Counter';

import Rotas from './routes';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
      setCount(count + 1);
  }

  return (
    <div className="App">
        <Rotas/>      
    </div>
  );
}

export default App;
