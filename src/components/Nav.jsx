import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import MyContext from '../context/MyContext';

const Nav = () => {
  const context = useContext(MyContext);
  const { auth } = context;

  return (
    <>
      <nav>
        <ul>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}>
            <li>Home</li>
          </NavLink>
          <NavLink
            to='/about'
            style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}>
            <li>About</li>
          </NavLink>

          {/* Only display this link if the user has been authorized */}
          {auth && (
            <NavLink
              to='/products'
              style={({ isActive }) => {
                return { color: isActive && 'green' };
              }}>
              <li>Products</li>
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
