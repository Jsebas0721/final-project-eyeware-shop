import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShopList from "./ShopList";
import NavBar from "./NavBar";
import NewFrameForm from "./NewFrameForm";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function App() {


    
  useEffect(()=>{

    document.title = "Clearvision Optical";

    fetch('http://localhost:3000/glasses')
    .then(resp => resp.json())
    .then(frameList => {
      setFrameList(frameList)
      const cart = frameList.filter(frame => frame.onCart);
      setCartItems(cart);
      const framePrices = cart.map(item => item.price);
      const total = framePrices.reduce((acc, currValue) => acc+ currValue,0)
      setTotalCart(total);
    })
  },[])


    return (
        <div className="App">
          <Header/>
          <hr/> 
          <NavBar/>
          <hr/>
          <Switch>
            <Route  exact path="/Shop">
              {showForm ?  <NewFrameForm onAddFrame={handleAddFrame}/> : null}
              <div className ="new-frame-button-container">
                {showForm ? 
                <button onClick={handleClick}>HIDE NEW FRAME FORM</button>:
                <button onClick={handleClick}>ADD NEW FRAME!</button>
                }
              </div>
              <hr/>
              <ShopList frameList={frameList} onHandleBuy={handleBuy}/>
            </Route>
            <Route  exact path="/Cart">
              <Cart cartItems={cartItems} onRemoveItem={handleRemove} totalCart={totalCart}/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      );
}

export default App;
