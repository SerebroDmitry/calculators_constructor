import React from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  //переменная для хранения перетаскиваемого элемента
  let druggedItem = null
  //переменная для хранения родителя перетаскиваемого элемента
  let ParentOfDruggedItem = null

  //устанавливаем по умолчанию конструктор
  useEffect(() => {
    document.getElementById('radio-2').checked = true
  }, [])

  //активация возможности вычисления
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

  //активация возможности конструктора
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

  //начинаем перемещение
  function Move(e) {
    e.preventDefault()
    if (( druggedItem === null ) && ( e.target.id !== 'EqualButton' )) druggedItem = e.target.closest('div')
      else if ( e.target.id === 'EqualButton' ) druggedItem = e.target

  }

  //подсвечиваем область приземления
  function DrugIsOver(e) {
    e.preventDefault()
    document.getElementById('MainAreaDiv').style.backgroundColor = "#F0F9FF"
  }

  //убираем подсветку при уходе с зоны дропа
  function DrugIsLeave(e) {
    e.preventDefault()
    document.getElementById('MainAreaDiv').style.backgroundColor = "#ffffff"
  }

  //бросаем элемент
  function DropItem(e) {
    e.preventDefault()
    //создаем клон перетаскиваемого элемента и меняем ему айди и класснэйм
    const clone = druggedItem.cloneNode(true)
    clone.id = druggedItem.id + 'Clone'
    clone.className = druggedItem.className + 'Clone'
    clone.draggable = false
    
    //задаем стили тем элементам, что мы перетаскивали и от которых мы делали клонов
    if (clone.nodeName === "BUTTON") {
      druggedItem.style.backgroundColor = "#BEBFF9"
      let parent = druggedItem.parentElement
      parent.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.06), 0px 0px 0px rgba(0, 0, 0, 0.1)'
    } else if (clone.nodeName === "DIV") {
        if (druggedItem.id === "InnerScreenDiv") {
          // ищем родителя для отмены теней
          let parent = druggedItem.parentElement
          parent.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.06), 0px 0px 0px rgba(0, 0, 0, 0.1)'
          druggedItem.style.color = "#A0A3A9"
        } else {
          druggedItem.style.boxShadow = '0px 0px 0px rgba(0, 0, 0, 0.06), 0px 0px 0px rgba(0, 0, 0, 0.1)'
          druggedItem.style.color = "#A0A3A9"
        }
    } 
    //вставляем клона
    document.getElementById('MainAreaDiv').append(clone)

    //после первого перемещения задаем стили окну в которое переместили
    document.getElementById('MainAreaDiv').style.backgroundColor = "#ffffff"
    document.getElementById('MainAreaDiv').style.border = '0px solid white'
    document.getElementById('Movehere').style.color = 'white'
    document.getElementById('AnyElement').style.color = 'white'
    document.getElementById('FromLeftPanel').style.color = 'white'

    //запрещаем перемещение уже дропнутого элемента
    druggedItem.draggable = false

    //обнуляем данные о переносимом элементе
    druggedItem = null
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
      <div className='ScreenDiv' id = 'ScreenDiv'>
        <div 
          className='InnerScreenDiv' 
          id='InnerScreenDiv' 
          draggable="true" 
          onDragOver = {(e) => Move(e)}
        >
          0
        </div>
      </div>
      
      <div 
        className='ActionsDiv' 
        id='ActionsDiv' 
        draggable = "true" 
        onDragOver={(e) => Move(e)}
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
        <span className='Movehere' id = 'Movehere'>Перетащите сюда</span>
        <span className='AnyElement' id = 'AnyElement'>любой элемент</span>
        <span className='FromLeftPanel' id = 'FromLeftPanel'>из левой панели</span>
      </div>
    </div>
  );
}

export default App;
