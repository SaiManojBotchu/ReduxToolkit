import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContent } from './04_Thunk/contentSlice';

function App4() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) return 'loading...';
  if (error) return error;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {contents.map((content) => (
        <div key={content.id}>
          <img src={`${content.thumbnailUrl}`} alt={`${content.title}`} />
        </div>
      ))}
    </div>
  );
}

export default App4;
