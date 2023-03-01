// functie care primeste payload de user si returneaza
// {type: '', payload: { } }

// action creator:
export const setUser = (user) => {
  return {
    type: 'auth/setUser',
    payload: user,
  };
};

// GET ->
export const readUser = () => {
  return async () => {
    // const { data } = await client.get(`/users/${userId}`);
    // return data;
  };
};
