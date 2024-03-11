const fs = require('node:fs/promises');
require('dotenv').config();
const url = `https://api.nasa.gov/planetary/apod`;
const searchURL = `https://images-api.nasa.gov/search`;
const querySearch = `${process.argv[2]}`;
const pageSize = Number(process.argv[3]);
const API_KEY = `${process.env.API_KEY}`;
const params = new URLSearchParams({
    //api_key: API_KEY,
   // date,
   q: querySearch,
   page_size: pageSize,
})


// Photo Search


async function NASAPhotoAndImageLibrary(url){
   if(params === undefined || !isNaN(params.page_size) ){
        console.log('error')
        return console.log(new Error('Please specify a search term')) 
    } 
    else {
        try {
        const response = await fetch(`${url}?${params}`)
        console.log(response.url)
        const result = await response.json();
        const searchResulst = result.collection.items;
        console.log(searchResulst)
        const 
        } 
        catch {
            throw new Error('Once you entered the search enter a limit');
        }
    }
}
NASAPhotoAndImageLibrary(searchURL);