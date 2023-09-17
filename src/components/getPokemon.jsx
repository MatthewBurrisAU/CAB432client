export default function getPokemon(id){

    const API_URL = process.env.REACT_APP_SERVER;
    const url = `${API_URL}/getpokemon?id=` + id

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res})
        .catch((err) => console.log(err));
}