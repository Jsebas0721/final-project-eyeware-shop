import React, { useState } from "react";

function NewFrameForm({onAddFrame}){

    const [frameData, setFrameData] = useState({
        name: "",
        image: "",
        price: 0.0,
    })
    
    function handleChange(event){

        console.log(event.target.value)
    
        if(event.target.name === "price"){
            setFrameData({
                ...frameData, 
                [event.target.name]: parseFloat(event.target.value),
            })
        }else{
            setFrameData({
                ...frameData, 
                [event.target.name]: event.target.value,
            })
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:3000/glasses',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(frameData)
        })
        .then(resp => resp.json())
        .then(frame => onAddFrame(frame))
    
        const inputs = document.querySelectorAll("input");
        for(let i = 0; i < inputs.length; i++){
            inputs[i].value = "";
        }
        
    }

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