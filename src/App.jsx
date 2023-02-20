// import { useEffect, useState } from 'react';
import { FourOhFour, Home } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <FourOhFour></FourOhFour>,
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
