import React, {useState} from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar"

// import {person, person2} from "./HomeLogic";

function Home() {

    console.log("Tut");
    const person = "Shivam";

    const [avenger, setAvenger] = useState("Doctor Strange");
    console.log(avenger);

    const [card, setCard] = useState([{
        title: "",
        body: ""
    }]);

    function handleCards(prevValue) {
        // Spread operator => ...
        setCard([...prevValue, {
            title: "qwerty",
            body: "body"
        }])
    }
    console.log(card);


    return (
        <div>
            <Navbar />
            <h2 className="heading">rejggd</h2>
            <h3>Hello, {person}</h3>

            <h2>{avenger}</h2>
            <button onClick={() => {setAvenger("Sorcerer Supreme")}}>Change Name</button>

            {/* <h2>{card}</h2> */}
            <button onClick={() => {handleCards(card)}}>Change</button>
        </div>
    )
}

export default Home;