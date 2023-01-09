import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavList.scss';

const NavList = () => {
  return (
    <Nav className='navlist-container mx-3'>
      <NavLink
        to='/store'
        className='navlist-item ms-md-0'
      >
        STORE
      </NavLink>
      <NavLink
        to='/category/headphones'
        className='navlist-item'
      >
        HEADPHONES
      </NavLink>
      <NavLink
        to='/category/speakers'
        className='navlist-item'
      >
        SPEAKERS
      </NavLink>
      <NavLink
        to='/category/earphones'
        className='navlist-item'
      >
        EARPHONES
      </NavLink>
    </Nav>
  );
};

export default NavList;
