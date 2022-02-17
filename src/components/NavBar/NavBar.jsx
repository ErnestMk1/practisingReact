import st from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeStyle = {
    color: '#000',
  };

  return (
    <div className={st.mainDiv}>
      <ul className={st.list}>
        <li className={st.listElement}>
          <NavLink
            to='/profile'
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Profile
          </NavLink>
        </li>
        <li className={st.listElement}>
          <NavLink
            to='/messages'
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Messages
          </NavLink>
        </li>
        <li className={st.listElement}>
          <NavLink
            to='/users'
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
