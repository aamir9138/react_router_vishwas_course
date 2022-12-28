// /* lecture 4 Links */
// import { Link } from 'react-router-dom';

// export const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//     </nav>
//   );
// };

/* lecture 5 Active Links */
// // for the CSS styling solution
// import { NavLink } from 'react-router-dom';

// export const Navbar = () => {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//     </nav>
//   );
// };

// // for the js styling solution
// import { NavLink } from 'react-router-dom';

// export const Navbar = () => {
//   const navLinkStyles = ({ isActive }) => {
//     return {
//       fontWeight: isActive ? 'bold' : 'normal',
//       textDecoration: isActive ? 'none' : 'underline',
//     };
//   };
//   return (
//     <nav>
//       <NavLink style={navLinkStyles} to="/">
//         Home
//       </NavLink>
//       <NavLink style={navLinkStyles} to="/about">
//         About
//       </NavLink>
//     </nav>
//   );
// };

/* lecture 8 Nested Routes */
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  return (
    <nav className="nav-primary">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink>
    </nav>
  );
};
