const btn = document.querySelector('button');
const comic = document.querySelector('p')
const titleComic = document.querySelector('h1')
const imageComic = document.querySelector('img');

async function getComic(){
    let rand = Math.floor(Math.random() * (3000)) + 1;
    let num = rand.toString();

    const apiUrl = `https://corsproxy.io/?https://xkcd.com/${num}/info.0.json`;
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);

    const title = json.safe_title;
    const year = json.year;
    const img = json.img;
    const alt = json.alt;

    titleComic.innerText = title;
    imageComic.setAttribute('src', img);
    imageComic.setAttribute('alt', alt);
    comic.innerText = year;
}

getComic();

btn.addEventListener ('click', () => {
    console.log('clicked')
    getComic();
})

