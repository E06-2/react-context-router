import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './LoginForm';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h2>Logo</h2>
      </Link>
      <LoginForm />
      <Nav />
    </header>
  );
};

export default Header;
