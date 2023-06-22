const axios = require("axios");

function getDonnees() {
  return axios.get(url).then(reponse => reponse.data)
}

