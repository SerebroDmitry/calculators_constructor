import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='RunOrConstDiv'>
          <div className="RunOrConstDiv-item">
            <div class="eye"></div>
            <input id="radio-1" type="radio" name="radio" value="1" />
            <label htmlFor="radio-1">Runtime</label>
          </div>
          <div className="RunOrConstDiv-item">
            <input id="radio-2" type="radio" name="radio" value="2" defaultChecked/>
            <label htmlFor="radio-2">Constructor</label>
          </div>
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
