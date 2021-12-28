import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar"

// import {person, person2} from "./HomeLogic";

function Home() {

    console.log("Tut");

    const person = "Shivam";
    
    return (
        <div>
            <Navbar />
            <h2 className="heading">rejggd</h2>
            <h3>Hello, {person}</h3>
        </div>
    )
}

export default Home;