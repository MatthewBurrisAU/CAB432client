export default function getCards(name){

    const API_URL = process.env.REACT_APP_SERVER
    const url = `${API_URL}/card?pokemon=` + name;

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res.images})
        .catch((err) => console.log(err));
}