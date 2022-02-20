const request = require('request');
 
const options = {
  url: '',
  method: "HEAD",
  headers: {
    'User-Agent': 'Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion'
  }
};
 
function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.headers);

    //const info = JSON.parse(body);
    //console.log(info.stargazers_count + " Stars");
    //console.log(info.forks_count + " Forks");
  }
}
 


module.exports.getFileSize = (url) => {
  options.url = url;
  request(options, callback);
  //console.log('Hello');
}


//module.exports = getFileSize;
