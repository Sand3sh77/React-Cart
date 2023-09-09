import './App.css'
import Items from './Items/items'
import Navbar from './Navbar/navbar'
import { useState } from 'react';


function App() {
  const [cartItemsNo, setCartItemsNo] = useState(4);
  return (
    <>
      <Navbar cartItemsNo={cartItemsNo}/>
      <Items setCartItemsNo={setCartItemsNo}/>
    </>
  )
}

export default App
