export default function getCards(name){

    const API_URL = `http://` + window.location.hostname + `:3001`;
    const url = `${API_URL}/card?pokemon=` + name;

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res.images})
        .catch((err) => console.log(err));
}