import React from 'react';
import './App.css';

function App() {

  function Runtime() {
    console.log('Runtime')
    document.getElementById('eye').style.color = "#5D5FEF"
  }

  function Construct() {
    console.log('Constructor')
    document.getElementById('eye').style.color = "#4D5562"
  }

  return (
    <div className="App">
      <div className='RunOrConstDiv'>
          <div className="RunOrConstDiv-item">
            <div className="eye" id='eye'></div>
            <input id="radio-1" type="radio" name="radio" value="1" onChange={() => Runtime()}/>
            <label htmlFor="radio-1">Runtime</label>
          </div>
          <div className="RunOrConstDiv-item">
            <div className="arrowsDiv" id='arrowsDiv'></div>
            <div className="arrowsDiv2" id='arrowsDiv2'></div>
            <input id="radio-2" type="radio" name="radio" value="2" defaultChecked onChange={() => Construct()}/>
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
        <button className='Button7'>
          7
        </button>
        <button className='Button8'>
          8
        </button>
        <button className='Button9'>
          9
        </button>
        <button className='Button4'>
          4
        </button>
        <button className='Button5'>
          5
        </button>
        <button className='Button6'>
          6
        </button>
        <button className='Button1'>
          1
        </button>
        <button className='Button2'>
          2
        </button>
        <button className='Button3'>
          3
        </button>
        <button className='Button0'>
          0
        </button>
        <button className='Button00'>
          ,
        </button>
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
