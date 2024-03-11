const fs = require('node:fs/promises');
const url = `https://api.nasa.gov/planetary/apod`;
const date = `${process.argv[2]}`;
const API_KEY = 
const total_results = 2;

 async function getPhotos(url){
    const params = new URLSearchParams({
        date,
        
    })
    const response = await fetch(`${url}?${params}`)
    const result = await response.json();
}

getPhotos(url)