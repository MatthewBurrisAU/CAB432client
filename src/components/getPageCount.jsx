export default function getPageCount(){

    const API_URL = `http://` + window.location.hostname + `:3001`;
    const url = `${API_URL}`

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res.count})
        .catch((err) => console.log(err));
}