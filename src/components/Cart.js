import React from "react";

function Cart({cartItems, onRemoveItem, totalCart}){



    
    const addedToCart = cartItems.map(item => (
        <tr key={item.id}>
            <td>
                <img src={item.image}/>
            </td>
            <td>
                <p>{item.name}</p>
            </td>
            <td>
                <p>{item.price}</p>
            </td>
            <td>
                <button onClick={() => handleClick(item.id)}>Remove From Cart</button>
            </td>
        </tr>
    ))
   
  

    return(
        <div className="cart-container">
            <h1>MY CART: </h1>
            <hr/>
            {cartItems.length === 0 ? <h2>YOUR CART IS EMPTY!</h2> :
            <table className="onCart">
                <tr>
                    <th>ITEM</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                </tr>
                {addedToCart}   
                <tr className="cart-total">
                    <td>
                    </td>
                    <td>
                        <p>TOTAL:</p>
                    </td>
                    <td>
                        {parseFloat(totalCart).toFixed(2)}
                    </td>
                </tr>   
            </table>  
            }
            <hr/>
        </div>
    )


}

export default Cart