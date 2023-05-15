const axios = require('axios');

function getUrlStatus(url){
  if(url){
    return axios.get(url).then((res) => { return res }).catch(() => {return 'error'})
  }
  return 'invalid url'
  
}

module.exports = { getUrlStatus }