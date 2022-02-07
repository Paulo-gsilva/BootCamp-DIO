const button = document.querySelector('.button');
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getMeme = async() => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;    
    } 
    catch (error) {
        console.log(error.message);
    }
}

const loadMeme = async () => {
    const img = document.getElementById('image');
    img.src = await getMeme();
}

button.addEventListener('click', loadMeme);
loadMeme();
