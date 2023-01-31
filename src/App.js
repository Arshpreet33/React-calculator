import { useState } from 'react'
import './App.css'
import './components/Button'
import Button from './components/Button'
const App=()=> {

  const [previous, setPrevious] = useState('');
  const [previousNum, setPreviousNum] = useState(0);
  const [current, setCurrent] = useState('0');
  const [operand, setOperand] = useState('+'); 
  const [isPrevious, setIsPrevious] = useState(false); 

  const btnClick=(text,type)=>{
    // setCurrent(text)
    switch(type) {
      case 'reset': resetDefault()
        return
        case 'result': 
        const result = Calculate()
          resetDefault()
          setCurrent(result.toString())
          return
        case 'operand':
          setOperand(text)
          setPreviousNum(Calculate())
          setPrevious(Calculate().toString().concat(' ',text))
          setCurrent('0')
          setIsPrevious(true)
          return
        case 'num':
          (current === '0') ? setCurrent(text) : setCurrent(current+text)
          return
        case 'change':
          (text === '.') ? (!current.includes('.') && setCurrent(current.concat(text))) : 
          ((current.length === 1) ? setCurrent('0') : setCurrent(current.substring(0,current.length-1)))
          return
      default:
        return '';
    }
  }

  const Calculate = () =>{
    const currentNum = parseFloat(current)
    switch(operand) {
      case '+':
        return (previousNum + currentNum)
        case '-':
        return (previousNum - currentNum)
        case 'x':
        return (previousNum * currentNum)
        case '÷':
        return (previousNum / currentNum)
      default:
        return '';
    }
  }

  const resetDefault = ()=>{
    setIsPrevious(false)
    setCurrent('0')
    setOperand('+')
    setPrevious('')
    setPreviousNum(0)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="calc-head">
          <div className='output'>
            <div className='first-box'>
            {isPrevious && <div className='previous-output'>{previous}</div>}
            </div>
            <div className='second-box'>
            <div className='current-output'>{current}</div>
            </div>
          </div>
        </div>
        <div className="calc-body">
          <div className='row'>
            <Button text={'AC'} onClick={btnClick} type={'reset'} span={'btn-big'} />
            <Button text={'C'}  onClick={btnClick} type={'change'}/>
            <Button text={'÷'}  onClick={btnClick} type={'operand'}/>
          </div>
          <div className='row'>
            <Button text={'1'}  onClick={btnClick} type={'num'}/>
            <Button text={'2'}  onClick={btnClick} type={'num'}/>
            <Button text={'3'}  onClick={btnClick} type={'num'}/>
            <Button text={'x'}  onClick={btnClick} type={'operand'}/>
          </div>
          <div className='row'>
            <Button text={'4'}  onClick={btnClick} type={'num'}/>
            <Button text={'5'}  onClick={btnClick} type={'num'}/>
            <Button text={'6'}  onClick={btnClick} type={'num'}/>
            <Button text={'-'}  onClick={btnClick} type={'operand'}/>
          </div>
          <div className='row'>
            <Button text={'7'}  onClick={btnClick} type={'num'}/>
            <Button text={'8'}  onClick={btnClick} type={'num'}/>
            <Button text={'9'}  onClick={btnClick} type={'num'}/>
            <Button text={'+'}  onClick={btnClick} type={'operand'}/>
          </div>
          <div className='row'>
            <Button text={'.'}  onClick={btnClick} type={'change'}/>
            <Button text={'0'}  onClick={btnClick} type={'num'}/>
            <Button text={'='}  onClick={btnClick} type={'result'} span={'btn-big'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

