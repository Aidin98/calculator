import React, { useState } from 'react'
import Button from './components/Button'
import './App.css';
import Input from './components/Input';
import ClearButton from './components/ClearButton'
import * as math from 'mathjs'
import BackspaceIcon from '@material-ui/icons/Backspace';
function App() {
  const [state,setState]=useState('')
  const  addToInput=(val)=>{
      setState((prevstate)=> prevstate+val)
  }
  const handleEqual=()=>{
    setState((prevstate)=> math.evaluate(prevstate))
  }
  const clearState=()=>{
    setState('')
  }
  const backSpace=()=>{
    if(state){
      console.log('uslo je')
       const str = state.slice(0, -1); 
       setState(str)
    }
  }
  console.log('OVO JE STATE'+state)
  return (
    <div className="App">
    
    <div className='calc-wrapper'>
      <Input  input={state}/>
         <div className='row'>
        <Button handleClick={addToInput}>7</Button >
        <Button handleClick={addToInput}>8</Button>
        <Button handleClick={addToInput}>9</Button>
        <Button handleClick={addToInput}>/</Button >
        

      </div>

   
       <div className='row'>
        <Button handleClick={addToInput}>4</Button>
        <Button handleClick={addToInput}>5</Button>
        <Button handleClick={addToInput}>6</Button>
        <Button handleClick={addToInput}>*</Button>
        

      </div>
      <div className='row'>
        <Button handleClick={addToInput}>1</Button >
        <Button handleClick={addToInput}>2</Button >
        <Button handleClick={addToInput}>3</Button >
        <Button handleClick={addToInput}>+</Button >
        

      </div>
      <div className='row'>
        <Button handleClick={addToInput}>.</Button>
        <Button handleClick={addToInput}>0</Button>
        <Button handleClick={handleEqual}>=</Button>
        <Button handleClick={addToInput}>-</Button>
        

      </div>
      <div className='row'>
        <ClearButton handleClear={clearState}>Clear</ClearButton>
        <BackspaceIcon className='icon' onClick={backSpace}/>
      </div>
    </div>
     </div>
  );
}

export default App;
