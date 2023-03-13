import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  let druggedItem = null

  useEffect(() => {
    //устанавливаем по умолчанию конструктор
    document.getElementById('radio-2').checked = true
  }, [])

  function Runtime() {
    console.log('Runtime')
    //меняем цвет иконки
    document.getElementById('eye').style.color = "#5D5FEF"
    document.getElementById('arrowsDiv').style.border = "2px solid #4D5562"
    document.getElementById('arrowsDiv2').style.border = "2px solid #4D5562"
    //запрещаем перетаскивание
    document.getElementById('InnerScreenDiv').draggable = false
    document.getElementById('ActionsDiv').draggable = false
    document.getElementById('NumbersDiv').draggable = false
    document.getElementById('EqualButton').draggable = false
  }

  function Construct() {
    console.log('Constructor')
    document.getElementById('eye').style.color = "#4D5562"
    document.getElementById('arrowsDiv').style.border = "2px solid #5D5FEF"
    document.getElementById('arrowsDiv2').style.border = "2px solid #5D5FEF"
    //разрешаем перетаскивание
    document.getElementById('InnerScreenDiv').draggable = true
    document.getElementById('ActionsDiv').draggable = true
    document.getElementById('NumbersDiv').draggable = true
    document.getElementById('EqualButton').draggable = true
  }

  function Move(e) {
    e.preventDefault()
    console.log('drug')
    druggedItem = e.target
    console.log(druggedItem)

  }
  function Put(e) {
    e.preventDefault()
    console.log('put')
    document.getElementById('MainAreaDiv').style.backgroundColor = "#ffffff"
  }
  function DrugIsOver(e) {
    e.preventDefault()
    document.getElementById('MainAreaDiv').style.backgroundColor = "#F0F9FF"
  }
  function DrugIsLeave(e) {
    e.preventDefault()
    document.getElementById('MainAreaDiv').style.backgroundColor = "#ffffff"
  }
  function DropItem(e) {
    e.preventDefault()
    const clone = druggedItem.cloneNode(true)
    console.log('drop')
    document.getElementById('MainAreaDiv').append(clone)
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
      <div 
        className='InnerScreenDiv' 
        id='InnerScreenDiv' 
        draggable="true" 
        onDragOver = {(e) => Move(e)}
        onDragEnd = {(e) => Put(e)}
        >
        <span className='ResultSpan'>0</span>
      </div>
      <div 
        className='ActionsDiv' 
        id='ActionsDiv' 
        draggable="true" 
        onDragOver={(e) => Move(e)}
        onDragEnd = {(e) => Put(e)}
        >
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
      <div 
        className='NumbersDiv' 
        id='NumbersDiv' 
        draggable="true" 
        onDragOver={(e) => Move(e)}
        onDragEnd = {(e) => Put(e)}
        >
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
        <button 
          className='EqualButton' 
          id='EqualButton' 
          draggable="true" 
          onDragOver={(e) => Move(e)}
          onDragEnd = {(e) => Put(e)}
          >=</button>
      </div>
      <div 
        className='MainAreaDiv' 
        id='MainAreaDiv'
        draggable="false" 
        onDragOverCapture = {(e) => DrugIsOver(e)}
        onDragLeaveCapture = {(e) => DrugIsLeave(e)}
        onDrop = {(e) => DropItem(e)}
        >
        <span className='Movehere'>Перетащите сюда</span>
        <span className='AnyElement'>любой элемент</span>
        <span className='FromLeftPanel'>из левой панели</span>
      </div>
    </div>
  );
}

export default App;
