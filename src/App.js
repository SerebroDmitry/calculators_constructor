import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='RunOrConstDiv'>
          Runtime/Constructor
      </div>
      <div className='ScreenDiv'>
        
      </div>
      <div className='InnerScreenDiv'>
        <span className='ResultSpan'>0</span>
      </div>
      <div className='ActionsDiv'>
        <button className='DivideButton'>
          /
        </button>
        <button className='MultipleButton'>
          x
        </button>
        <button className='MinusButton'>
          -
        </button>
        <button className='PlusButton'>
          +
        </button>
      </div>
      <div className='NumbersDiv'>

      </div>
      <div className='EqualDiv'>
        <button className='EqualButton'>=</button>
      </div>
      <div className='MainAreaDiv'>

      </div>
    </div>
  );
}

export default App;
