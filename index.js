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
   media_type:'image',
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
        const searchResults = result.collection.items;
        console.log(searchResults)
        console.log(searchResults);
        for(const item of searchResults){
            console.log(item);
            const image = item.links[0].href
            console.log(image);
        }


        } 
        catch {
            throw new Error('Whoops something broke');
        }
    }
}
NASAPhotoAndImageLibrary(searchURL);

