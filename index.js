const fs = require('node:fs/promises');
require('dotenv').config();
const url = `https://api.nasa.gov/planetary/apod`;
const date = `${process.argv[2]}`;
const API_KEY = `${process.env.API_KEY}`;
console.log(API_KEY);


 async function getPhotos(url){
    const params = new URLSearchParams({
        api_key: API_KEY,
        date,
    })
    const response = await fetch(`${url}?${params}`)
    console.log(response.url)
    const result = await response.json();
    console.log(result)
}

getPhotos(url)