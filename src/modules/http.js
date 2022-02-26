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
    //console.log(typeof(response.headers));
    //console.log(response.headers);

    for (let key of Object.keys(response.headers)) {
      if (typeof (key) === "Symbol") {
        if (Symbol.keyFor(key) === 'content-length') {
          console.log(key);
          //return key;
        }
      }
    }

    //const info = JSON.parse(body);
    //console.log(info.stargazers_count + " Stars");
    //console.log(info.forks_count + " Forks");
  }
}

module.exports.getFileSize = (url) => {
  options.url = url;
  return request(options, callback);
  //console.log('Hello');
}


//module.exports = getFileSize;
