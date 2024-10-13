import React from 'react';
import { evaluate } from 'mathjs';

function App() {
  let currentInput = '';

  const press = (num) => {
    currentInput += num;
    document.getElementById('display').value = currentInput;
  };

  const calculate = () => {
    try {
      currentInput = evaluate(currentInput).toString();
      document.getElementById('display').value = currentInput;
    } catch (e) {
      document.getElementById('display').value = 'Error';
      currentInput = '';
    }
  };

  return (
    <div className="App">
      <h1>Calculadora Simple</h1>
      <div id="calculator">
        <input type="text" id="display" disabled style={{ width: '100%', marginBottom: '10px', padding: '10px', fontSize: '16px' }} />
        <div>
          <button onClick={() => press('1')}>1</button>
          <button onClick={() => press('2')}>2</button>
          <button onClick={() => press('3')}>3</button>
          <button onClick={() => press('+')}>+</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
