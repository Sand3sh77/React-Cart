import { useState } from 'react';
import './navbar.css'
const Navbar = () => {
    const [items, setItems] = useState('0');
    return (
        <div className="nav_container">
            <h2>Redux Toolkit</h2>
            <div className='cart_icon'>
                <img className="svg" src='src/assets/svg/cart.svg' />
                <div className='item_no_container'>{items}</div>
            </div>

        </div>
    );
}
export default Navbar;