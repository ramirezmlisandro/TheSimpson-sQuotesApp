const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => {
      res.status(200).send(response.data)
    })
    .catch(error => {
      console.log(error)
    })
});

//gets all favourite quotes from USER
// app.get('/favourites', (req, res) => {
  
// });

//post a quote as favourite on db
// app.post('/', (req, res) => {

// });

// //delete favourite quote from user
// app.delete('/', (req, res) => {

// })
module.exports = app;