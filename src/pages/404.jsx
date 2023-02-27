import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FullScreenLayout } from '../layouts';

export const FourOhFour = () => {
  const dispatch = useDispatch();

  return (
    <FullScreenLayout>
      <div className="bg-teal-500 w-screen h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <span className="text-7xl animate-pulse block">404</span>

          <Link to="/" title="Home" className="font-bold">
            Home
          </Link>
        </div>

        <button
          onClick={() => {
            dispatch({
              type: 'add',
              payload: 404,
            });
          }}
        >
          Add 404 to state
        </button>
      </div>
    </FullScreenLayout>
  );
};
