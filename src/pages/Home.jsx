import { useEffect, useState } from 'react';
import { Layout } from '../layouts';
import { client as usersApi } from './../api/users';

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersApi.get('/users').then((response) => {
      const { data } = response;

      setUsers(data);
    });
  }, [setUsers]);

  return (
    <Layout>
      <div>Home:</div>
      <div className="container mx-auto px-4">
        Home: {JSON.stringify(users)}
      </div>
    </Layout>
  );
};