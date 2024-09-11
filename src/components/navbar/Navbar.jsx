import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { CartContext } from '../contextt/Context';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {cart} = useContext(CartContext)
    
    return (
        <>
        <div className='text-white flex flex-wrap justify-between items-center p-7 mb-8 bg-green-800 fixed w-full z-50'>

            <h1>Responsive-Plants</h1>
            <Link to='/cart'>
                <p>Cart : {cart.length}</p>
            </Link>

            {/* Show menu items on large screens */}
            <ul className={`md:flex hidden gap-5`}>
            <a href='/about'>
                <li>About</li>
                </a>

                <a href='/contact'>
                <li>Contact</li>
                </a>

                <a href='/certification'>
                <li>Certificats</li>
                </a>

                <a href='/projects'>
                <li>Projects</li>
                </a>
            </ul>



            {/* Toggle menu on small screens */}
            <ul className={`md:hidden flex ${showMenu ? "block" : "hidden"} mt-1 gap-8 bg-green-900 p-1 `}>
            <a href='/about'>
                <li>About</li>
                </a>

                <a href='/contact'>
                <li>Contact</li>
                </a>

                <a href='/certification'>
                <li>Certificats</li>
                </a>
            </ul>


            <div className='md:hidden'>
                {showMenu ? (
                    <CloseIcon onClick={() => setShowMenu(false)}/>
                ) : (
                    <MenuIcon onClick={() => setShowMenu(true)} />
                )}
            </div>
        </div>
       
        </>  
    );
}

export default Navbar;
