const opn = require('opn');

setInterval(() => {

  opn('https://www.youtube.com/watch?v=2nGKqH26xlg');

}, 60 * 60 * 1000)  // break every hour
