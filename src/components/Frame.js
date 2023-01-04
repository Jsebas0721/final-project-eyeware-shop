import React from "react";

function Frame({frame, onHandleBuy}){

    const{id,name,image, price, onCart} = frame

   
    
    return(
        <div className="frame-product">
            <li>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <span>
                    <p>Price: {price}</p>
                    {onCart ? 
                    <button className="disabled-button" disabled>Added To Cart</button> :
                    <button className="active-button" onClick={handleClick}>Add to Cart!</button> 
                    }
                    
                </span>   
            </li>
        </div>
    )
}

export default Frame;