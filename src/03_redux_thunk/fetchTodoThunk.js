import axios from 'axios';

// Define a thunk action creator
export const fetchTodo = (id) => async (dispatch) => {
  const res = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`);
  console.log(res.data);
  // dispatch(setCount(res.data.id));
};
