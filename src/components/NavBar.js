import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){

  

    return(
        <div className="navbar">
            <ul>
                <NavLink
                    to="/"
                    /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                    exact
                    style={linkStyles}
                    activeStyle={{
                        color: "aqua",
                      }}
                >
                Home    
                </NavLink>
                <NavLink
                    to="/Shop"
                    exact 
                    style={linkStyles}
                    activeStyle={{
                        color: "aqua",
                      }}
                >
                Shop 
                </NavLink>
                <NavLink
                    to="/Cart"
                    exact
                    style={linkStyles}
                    activeStyle={{
                        color: "aqua",
                      }}
                >
                Cart🛒
                </NavLink>  
            </ul>
        </div>
    )
    }
    
    export default NavBar;