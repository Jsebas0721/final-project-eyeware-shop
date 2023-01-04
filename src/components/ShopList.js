import React from "react";
import Frame from "./Frame";

function ShopList({frameList, onHandleBuy}){

const frames = frameList.map((frame) => (
    <Frame key={frame.id} frame={frame} onHandleBuy={onHandleBuy}/>
))

return (
    <div className="frame-container">
        <h2>OUR GLASSES!</h2>
        <ul className="frameCards">
        {frames}
        </ul>
    </div>
)
}

export default ShopList;