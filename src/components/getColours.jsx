
export default function getColours(){

    const API_URL = process.env.REACT_APP_SERVER;
    const url = `${API_URL}/getcolours`

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res.colours})
        .catch((err) => console.log(err));
}