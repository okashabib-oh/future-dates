import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import DateComp from './components/Date';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0)
  const [date, setDate] = useState(new Date())

  function handleStepIncrement() {
    setStep((s) => s + 1)
  }
  function handleStepDecrement() {
    if (step < 1) {
      setStep(0)
    } else {
      setStep((s) => s - 1)
    }
  }
  function handleCountIncrement() {
    setCount((c) => c + step)
  }
  function handleCountDecrement() {
    if (count < 1) {
      setCount(0)
    } else {
      setCount((c) => c - step)
    }
  }

  const daysFromToday = n => {
    let d = new Date();
    d.setDate(d.getDate() + n);
    return d;
  };

  useEffect(() => (
    setDate(daysFromToday(count))
  ), [count])

  return (
    <>
      <Counter title='Step' increment={handleStepIncrement} decrement={handleStepDecrement} value={step} />
      <Counter title='Count' increment={handleCountIncrement} decrement={handleCountDecrement} value={count} />
      <DateComp step={step} count={count} date={date} />
    </>
  )
}

export default App
