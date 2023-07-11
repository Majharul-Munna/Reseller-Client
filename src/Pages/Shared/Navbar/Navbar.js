import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider.js';
import logo from '../../../assets/logo/logo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link className='btn btn-ghost text-black border-none rounded'  to="/">Home</Link></li>
        <li><Link className='btn btn-ghost text-black border-none rounded' to="/categories">Categories</Link></li>
        <li><Link className='btn btn-ghost text-black border-none rounded' to="/about">About</Link></li>
        {user?.uid ?
            <>
                <li><Link className='btn btn-ghost text-black border-none rounded' to="/dashboard">Dashboard</Link></li>
                <li><button className='btn btn-ghost text-black border-none rounded' onClick={handleLogOut}>Sign out</button></li>
            </>
            : <li><Link className='btn btn-ghost text-black border-none rounded' to="/login">Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar  bg-orange-300 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-orange-300 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost font-bold normal-case text-xl text-white"> <img  className='w-7 h-7 rounded-r rounded-l ' src={logo} alt=''></img> Re-Seller DIU</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;