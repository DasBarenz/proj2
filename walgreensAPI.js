require("dotenv").config();
var axios = require("axios");
var keys = require('./keys.js');
var walgreens = keys.walgreens;

var lat = "39.764906";
var long = "-105.062145";

axios.post("https://services-qa.walgreens.com/api/stores/search", {
        "apiKey": walgreens.apiKey,        
        "affId": walgreens.affId,
        "lat": lat,
        "lng": long,
        "srchOpt": "", //this default for all stores
        "nxtPrev": "", //no pagination required, 10 is enough
        "requestType": "locator",
        "act": "fndStore",
        "view": "fndStoreJSON",
        "devinf": "",
        "appver": "",
  })
  .then(function (response) {
    console.log(response.data.stores);
  })

