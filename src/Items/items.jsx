import "./items.css"
import cartItems from "../data";
import { useState, useEffect } from "react";

const Items = ({ setCartItemsNo }) => {
    const [items, setItems] = useState([...cartItems]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {

        let total = 0;
        items.forEach((v) => {
            total = total + (v.amount)
        });
        setTotalAmount(total);

    }, [items])


    const handleRemove = (id) => {

        setItems((prev) => prev.filter((v) => v.id !== id));

        setCartItemsNo(totalAmount - 1);
    }

    const increaseAmount = (id) => {
        const cartItem = items.find((item) => item.id === id);
        const ind = items.indexOf(cartItem);
        let items1 = [...items];
        items1[ind].amount = items1[ind].amount + 1;
        setItems(items1);
        setCartItemsNo(totalAmount + 1);
    }
    const decreaseAmount = (id, amount) => {
        if (amount > 1) {
            const cartItem = items.find((item) => item.id === id);
            const ind = items.indexOf(cartItem);
            let items1 = [...items];
            items1[ind].amount = items1[ind].amount - 1;
            setItems(items1);
        }
        else {
            handleRemove(id);
        }
        setCartItemsNo(totalAmount - 1);
    }
    let totalPrice=0;

    return (
        <div className="container" style={{ paddingTop: '5rem' }}>
            <h1 style={{ textAlign: 'center' }}>YOUR BAG</h1>
            {items.length !== 0 ?
                <div className="items_container">
                    {items.map((data, index) => {
                        const { id, title, price, img, amount } = data;
                        totalPrice=totalPrice+amount*price;
                        return (
                            <span key={id}>
                                <div className="items" key={id}>
                                    <div style={{ display: 'flex', gap: "2rem" }}>
                                        <img style={{ height: '5rem' }} src={img} />
                                        <div>
                                            <div style={{ letterSpacing: '2px' }}>{title}</div>
                                            <div style={{ color: 'grey', letterSpacing: '1px' }}>${(amount * price).toFixed(2)}</div>
                                            <a className="item_remove" onClick={() => handleRemove(id)}>remove</a>
                                        </div>
                                    </div>
                                    <div className="item_toggle">
                                        <a><img className="svg" src="src/assets/svg/arrowup.svg" onClick={() => increaseAmount(id, index)} /></a>
                                        {amount}
                                        <a><img className="svg" src="src/assets/svg/arrowdown.svg" onClick={() => decreaseAmount(id, amount)} /></a>
                                    </div>
                                </div>
                            </span>
                        );
                    })}
                    <div className="total">
                        <h5>Total</h5>
                        <div>${totalPrice.toFixed(2)}</div>
                    </div>

                    <button className="btn btn-danger" style={{ display: 'block', margin: 'auto' }} onClick={() => {
                        setItems([]),setCartItemsNo(0);
                    }
                    }>Clear Cart</button>
                </div> :
                <>
                    <h6 style={{ color: 'gray', letterSpacing: '4px', textAlign: 'center', margin: '2rem' }}>is currently empty</h6>
                </>
            }
        </div >
    );
}
export default Items;