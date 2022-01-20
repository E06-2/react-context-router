import { useState } from 'react';
import MyContext from './MyContext';

import useFetch from '../hooks/useFetch';

const MyProvider = ({ children }) => {
  const USER = process.env.REACT_APP_USER;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  const [form, setForm] = useState({ user: '', password: '' });
  const [auth, setAuth] = useState(false);

  const handleFormInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    form.user === USER && form.password === PASSWORD
      ? setAuth(true)
      : setAuth(false);
    setForm({ user: '', password: '' });
  };

  const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15';
  const initialState = { results: null, loading: true, error: null };

  const { results, loading, error } = useFetch(url, initialState);

  return (
    <MyContext.Provider
      value={{
        results,
        loading,
        error,
        form,
        handleFormInput,
        handleFormSubmit,
        auth,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
