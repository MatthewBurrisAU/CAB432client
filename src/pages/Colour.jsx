import React, { useEffect, useState } from 'react';
import getColours from '../components/getColours';
import getPokemon from '../components/getPokemon';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap'

export default function Colour() {

    const [colours, setColours] = useState([]);
    const [pokemon, setPokemon] = useState({"name": "Select a colour", "pokemon": []});
    const [status, setStatus] = useState("");

    useEffect(() => {
        getColours().then(res => setColours(res))
        }, [])

    function getMons(id){
        setStatus("Loading...")
        
        getPokemon(id).then(res => setPokemon(res)).then(()=>setStatus("")).catch(() => setStatus("Unable to find Pokemon..."))
    }

    return (
        <div>
            <h1 className="monTitle">
                Select a Colour and see all the Pokemon of that colour!
            </h1>
            <div className="monDropdown">
                <DropdownButton onSelect={eventKey => (getMons(eventKey))} id="dropdown-basic-button" title={pokemon.name}>
                    {colours.map(colour => (
                        <Dropdown.Item key={colour.id} eventKey={colour.id}>{colour.name}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>
            <div>
                {status}
            </div>
            <div className="monList">
                <Table>
                    <thead>
                        <tr>
                            <th>Results:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.pokemon.map(pokemon => (
                            <tr key={pokemon.name}>
                                <td key={pokemon.name}>
                                    <a href={"/card-images?name=" + pokemon.name}>{pokemon.name}</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>    
                </Table>
            </div>
        </div>
    )
}