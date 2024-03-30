const fs = require('node:fs/promises');
const path = require('node:path');
require('dotenv').config();

// const url = 'https://api.nasa.gov/planetary/apod';
const searchURL = 'https://images-api.nasa.gov/search';
const querySearch = `${process.argv[2]}`;
const pageSize = Number(process.argv[3]);
// const API_KEY = `${process.env.API_KEY}`;
const params = new URLSearchParams({
  // api_key: API_KEY,
  // date,
  q: querySearch,
  page_size: pageSize,
  media_type: 'image',
});

// Photo Search
async function NASAPhotoAndImageLibrary(url) {
  if (params === undefined || !isNaN(params.page_size)) {
    return console.log(new Error('Please specify a search term'));
  }

  const response = await fetch(`${url}?${params}`);
  //  console.log(response.url);
  const result = await response.json();
  const searchResults = result.collection.items;
  // console.log(typeof searchResults);
  // console.log(searchResults);
  for (const item of searchResults) {
    console.log(item);
    const title = item.data[0].title;
    const imageLink = item.links[0].href;
    const imageResponse = await fetch(imageLink,{method: "GET"});
    const imageResult = await imageResponse.arrayBuffer()
    // stringify the JSON object
    const image = new DataView(imageResult);
    //const rawImage = JSON.stringify(image);
    //set the path to be in the same project folder
    const filePath = path.join(__dirname, `${title}.jpg`);
    //write the file
    fs.writeFile(filePath, image, { encoding: 'utf-8' });
  }
}
NASAPhotoAndImageLibrary(searchURL);
