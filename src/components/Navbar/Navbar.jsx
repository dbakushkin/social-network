import "./../../App.css";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return  <nav className={classes.nav}>
  <div className={classes.item}>
    <NavLink to="/profile" className = {({isActive}) => isActive ? classes.active : classes.item }>Profile</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to="/dialogs" className = {({isActive}) => isActive ? classes.active : classes.item }>Messages</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to="/news" className = {({isActive}) => isActive ? classes.active : classes.item }>News</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to="/Music" className = {({isActive}) => isActive ? classes.active : classes.item }>Music</NavLink>
  </div>
  <div className={classes.item}>
    <NavLink to="Settings" className= {({isActive}) => isActive ? classes.active : classes.item }>Settings</NavLink>
  </div>
</nav>
}

export default Navbar;