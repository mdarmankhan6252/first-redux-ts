import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './redux/features/counterSlice';
import type { RootState } from './redux/store';

function App() {

  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter)

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <>

      <h1>Redux With TS</h1>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </>
  )
}

export default App
