import { Card } from './card.js'

const input = document.querySelector('#Search');
const form = document.querySelector('#form');
const container = document.querySelector('.main');
const endpoint = 'https://api.unsplash.com/photos'

form.addEventListener('submit', e => e.preventDefault());


input.addEventListener('keydown', e => {
    const userSearch = e.target.value;
    if(e.key === "Enter" && userSearch.length >= 1) {
        loadImage(userSearch);
        return;
    }
})


const loadImage = (userSearch) => {
    const link = `${endpoint}?query=${userSearch}&per_page=30&client_id=${client}`;
    fetch(link)
        .then(response => response.json())
        .then(response => insertImage(response))
        .catch(error => console.error(error))
}


const insertImage = (images) => {

    cleanHtml(container);
    const containerItems = document.createElement("div");
    images.forEach(img => {
        const {likes, links, urls, user} = img;
        const card = Card(likes, links, urls, user)
        containerItems.appendChild(card)
    })
    container.appendChild(containerItems);
    
}

const cleanHtml = (element) => {
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}

loadImage('tree');
