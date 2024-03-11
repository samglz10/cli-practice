const fs = require('node:fs/promises');
require('dotenv').config();
const url = `https://api.nasa.gov/planetary/apod`;
const searchURL = `https://images-api.nasa.gov/search`;
const querySearch = `${process.argv[2]}`;
const API_KEY = `${process.env.API_KEY}`;
const params = new URLSearchParams({
    api_key: API_KEY,
   // date,
   q: querySearch,
})


// Photo Search


async function NASAPhotoAndImageLibrary(url, date){

    if(date === undefined || date === NaN){
        console.log('check')
        return new Error('Please enter a valid date in the following format')
    }
    try {
    const response = await fetch(`${url}?${params}`)
    console.log(response.url)
    const result = await response.json();
    console.log(result)
    } 
    catch {
        throw new Error('fetch failed')
    }
    
}
NASAPhotoAndImageLibrary(searchURL);