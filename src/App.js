import './index.css';
import React from "react"
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                id={item.id}
                item={item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}
