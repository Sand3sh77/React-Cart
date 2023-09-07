import "./items.css"
import cartItems from "../data";
import { useState } from "react";

const Items = () => {
    const [number, setNumber] = useState('');
    const [items, setItems] = useState(cartItems);

    const handleRemove = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }
    const increaseAmount = (id, index) => {
        const cartItem = items.find((item) => item.id === id);
        cartItem.amount = cartItem.amount + 1;
        const newItems = items.filter((item) => item.id !== id);
        setItems([...newItems, cartItem]);
        console.log([...newItems, cartItem]);
    }
    const decreaseAmount = (id) => {
        const cartItem = items.find((item) => item.id === id);
        cartItem.amount = cartItem.amount - 1;
        const newItems = items.filter((item) => item.id !== id);
        setItems([...newItems, cartItem]);
        console.log([...newItems, cartItem]);
    }
    let total = 0;
    return (
        <div className="container" style={{ paddingTop: '5rem' }}>
            <h1 style={{ textAlign: 'center' }}>YOUR BAG</h1>
            {items[0] !== undefined ?
                <div className="items_container">
                    {items.map((data, index) => {
                        const { id, title, price, img, amount } = data;
                        total = total + amount * price;
                        return (
                            <div className="items" key={id}>
                                <div style={{ display: 'flex', gap: "2rem" }}>
                                    <img style={{ height: '5rem' }} src={img} />
                                    <div>
                                        <div style={{ letterSpacing: '2px' }}>{title}</div>
                                        <div style={{ color: 'grey', letterSpacing: '1px' }}>${price}</div>
                                        <a className="item_remove" onClick={() => handleRemove(id)}>remove</a>
                                    </div>
                                </div>
                                <div className="item_toggle">
                                    <a><img className="svg" src="src/assets/svg/arrowup.svg" onClick={() => increaseAmount(id, index)} /></a>
                                    {amount}
                                    <a><img className="svg" src="src/assets/svg/arrowdown.svg" onClick={() => decreaseAmount(id, index)} /></a>
                                </div>
                            </div>
                        );
                    })}
                    <div className="total">
                        <h5>Total</h5>
                        <div>${total}</div>
                    </div>

                    <button className="btn btn-danger" style={{ display: 'block', margin: 'auto' }} onClick={() => setItems([])}>Clear Cart</button>
                </div> :
                <>
                    <h6 style={{ color: 'gray', letterSpacing: '4px', textAlign: 'center', margin: '2rem' }}>is currently empty</h6>
                    <button className="btn btn-success" style={{ display: 'block', margin: 'auto' }} onClick={() => setItems(cartItems)}>Reset Items</button>
                </>
            }
        </div >
    );
}
export default Items;