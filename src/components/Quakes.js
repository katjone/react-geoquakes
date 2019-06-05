import React, { Component } from "react";
// import axios from "axios";

const Quakes = ({earthquakes}) => {
    const quakes = earthquakes.map((quake, key)=>{
        return (
            <li key={key}>{quake.properties.title}</li>
        )
    })

    return(
        <ul>
            {quakes}
        </ul>
    )

}
    

export default Quakes;
