import './navbar.css'
const Navbar = ({cartItemsNo}) => {
    return (
        <div className="nav_container">
            <h2>My Cart</h2>
            <div className='cart_icon'>
                <img className="svg" src='src/assets/svg/cart.svg' />
                <div className='item_no_container'>{cartItemsNo}</div>
            </div>

        </div>
    );
}
export default Navbar;