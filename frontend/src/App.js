import React, {useState} from 'react';

/**JSX (Javascript XML) */

import Routes from './routes';

import './global.css'
function App() {
 /**const [count, setCounter] = useState(0);

 //Array [valor, funcaoDeAtualização

  function increment(){
    setCounter(count+1);
    console.log(count);
  } 

  return (
    <div>
      <Header>
        contador: {count}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
  */
  
  return(
    <Routes />
  );
  
}

export default App;
