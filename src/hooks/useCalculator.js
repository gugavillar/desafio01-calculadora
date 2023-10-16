import {useState} from 'react'

let firstInsert = null
let operationInsert = null

export const useCalculator = () => {
  const [currentNumber, setCurrentNumber] = useState('0')

  const handleClear = () => {
    setCurrentNumber('0')
    firstInsert = null
    operationInsert = null
  }

  const handleAddNumber = (num) => setCurrentNumber(prev => prev === '0' ? `${num}` : `${prev}${num}`)

  const handleOperation = (operation) => {
    if (currentNumber === '0') return
    if (operationInsert) return handleCalculate()
    operationInsert = operation
    firstInsert = Number(currentNumber)
    setCurrentNumber('0')
  }

  const handleCalculate = () => {
    if (!firstInsert) return
    switch(operationInsert) {
      case '+':
        setCurrentNumber(prev => firstInsert + Number(prev))
        operationInsert = null
        break
      case '-':
        setCurrentNumber(prev => firstInsert - Number(prev))
        operationInsert = null
      break
      case 'x':
          setCurrentNumber(prev => firstInsert * Number(prev))
          operationInsert = null
      break
      case '/':
          setCurrentNumber(prev => firstInsert / Number(prev))
          operationInsert = null
      break
    }
  }

  return  {currentNumber, handleClear, handleAddNumber, handleOperation, handleCalculate}
}