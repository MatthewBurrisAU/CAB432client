import React, { useState, useEffect } from "react"
import getCards from "../components/getCard"
//import {Button} from "react-bootstrap"

export default function ChosenPokemon(){

    const [cards, setCards] = useState([]);
    const [status, setStatus] = useState("Loading...");

    useEffect(() => {
        const qParams = new URLSearchParams(window.location.search)
        getCards(qParams.get("name")).then(res => setCards(res)).catch(() => setStatus("Unable to find images, try again!"))
        }, [])

    return (
        <div>
            <div className="cardTitle">
                {(cards.length > 0) ? <h1>{new URLSearchParams(window.location.search).get("name")}</h1> : status}
            </div>
            <div>
                {cards.map(card => (
                    <img key={card} src={card} alt="Card"></img>
                ))}
            </div>
        </div>
    )
}


///<img src="https://images.pokemontcg.io/bw4/9.png" alt="Amoonguss"></img>