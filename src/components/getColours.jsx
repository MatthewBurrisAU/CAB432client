
export default function getColours(){

    const API_URL = `http://` + window.location.hostname + `:3001`;
    const url = `${API_URL}/getcolours`

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res.colours})
        .catch((err) => console.log(err));
}