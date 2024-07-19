import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './01_Redux_Basics/counterSlice';
import { fetchTodo } from './03_redux_thunk/fetchTodoThunk';

function App3() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleFetchTodo = () => {
    dispatch(fetchTodo(count));
  };

  return (
    <div>
      <h1>Redux Toolkit Tutorial</h1>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <br />
      <button onClick={handleFetchTodo}>Fetch Todo</button>
    </div>
  );
}

export default App3;
