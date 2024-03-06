const fs = require('node:fs/promises');
const url = `https://api.pexels.com/v1/search`;
const searchQuery = `${process.argv[2]}`;
const total_results = 2;

 async function getPhotos(url){
    const params = new URLSearchParams({
        searchQuery, 
        total_results,
    })
    const response = await fetch(`${url}?${params}`)
    const result = await response.json();
}

getPhotos(url)