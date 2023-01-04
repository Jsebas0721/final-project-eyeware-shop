import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShopList from "./ShopList";
import NavBar from "./NavBar";
import NewFrameForm from "./NewFrameForm";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function App() {


  


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
