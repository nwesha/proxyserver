const express = require('express');
const request = require('request');
const app = express();

const API_KEY = '0NPAdyGBiowTx4fAvA0gEwk1MyCpozVK';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/locations/v1/cities/search', (req, res) => {
  const query = req.query.q;
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${query}`;
  
  request(url).pipe(res);
});

app.get('/api/currentconditions/:locationKey', (req, res) => {
  const locationKey = req.params.locationKey;
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${API_KEY}`;

  request(url).pipe(res);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
