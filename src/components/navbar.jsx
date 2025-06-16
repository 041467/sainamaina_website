import { NavLink } from "react-router-dom";


const Navbar = () => {
 return (
   <nav
    style={{
        color: 'white',
        backgroundColor: '#EFE4D2',
        padding: '10px',
        margin:'0px',
       textDecoration:'none'
      }}>
     <NavLink
       to="/"
      style={{
        color: '#254D70',
       
        padding: '10px'
      }}
       
     >
       Home
     </NavLink>
     <NavLink
       to="/about"
       style={{
        color: '#254D70',
       
        padding: '10px'
      }}
     >
       About
     </NavLink>
       <NavLink
       to="/contact"
       style={{
        color: '#254D70',
     
        padding: '10px'
      }}
     >
       Contact
     </NavLink>
   </nav>
 );
};


export default Navbar;
