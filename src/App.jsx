// import { useEffect, useState } from 'react';
import { FourOhFour, Home, Profile } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PlayPage from './pages/PlayPage';
import Rank from './pages/Rank';
import Ranks from './pages/Ranks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <FourOhFour></FourOhFour>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  },
  {
    path: '/play',
    element: <PlayPage></PlayPage>,
  },
  {
    path: '/ranks',
    element: <Ranks></Ranks>,
  },
  {
    path: '/rank',
    element: <Rank></Rank>,
  },
]);

const App = () => {
  // const [users, setUsers] = useState();

  // useEffect(() => {
  //   fetch('http://localhost:8080/users')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, [setUsers]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
