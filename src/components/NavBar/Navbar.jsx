import Navbar from 'react-bootstrap/Navbar';
import { List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../../logo.svg';
import NavList from './NavList';
import './NavBar.scss';

const NavBar = () => {
  return (
    <Navbar
      expand='lg'
      className='nav-container px-5'
    >
      <Link
        to='/'
        className='nav-brandContainer'
      >
        <Navbar.Brand className='mx-0 py-0'>
          <img
            src={logo}
            alt='logo'
          />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle
        aria-controls='basic-navbar-nav'
        className='nav-toggle'
      >
        <List className='nav-icon' />
      </Navbar.Toggle>

      <Navbar.Collapse
        id='basic-navbar-nav'
        className='justify-content-center'
      >
        <NavList />
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
