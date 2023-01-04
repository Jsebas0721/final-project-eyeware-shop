import React, { useState } from "react";

function NewFrameForm({onAddFrame}){

    
    return(
        <div className="new-frame-form">
            <h1>New Frame</h1>
            <form className="frame-form" onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                type="text" 
                name="name"
                placeholder="Enter frame's name..."
                onChange={handleChange}
                />
                <label>Image URL: </label>
                <input 
                type="text" 
                name="image"
                placeholder="Enter frame's image..."
                onChange={handleChange}
                />
                <label>Price: </label>
                <input 
                type="number" 
                name="price" 
                step="0.01"
                onChange={handleChange}
                />
                <button type="submit">Add Frame</button>
            </form>
        </div>
     )   
    }
    
    export default NewFrameForm;