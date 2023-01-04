import React from "react";

function Frame({frame, onHandleBuy}){

    const{id,name,image, price, onCart} = frame

    function handleClick(){
        
        fetch(`http://localhost:3000/glasses/${id}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "onCart": true,
            })
          })
        .then(resp => resp.json())
        .then(frame => {
            console.log("Added to Cart: ",frame)
            onHandleBuy(frame)
           
        });
    }
    
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