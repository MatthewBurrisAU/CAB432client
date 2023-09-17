export default function getPageCount(){

    const API_URL = process.env.REACT_APP_SERVER;
    const url = `${API_URL}`

    return fetch(url)
        .then((res) => res.json())
        .then((res) => {return res.count})
        .catch((err) => console.log(err));
}