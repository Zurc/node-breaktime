const opn = require('opn');

setInterval(() => {

  opn('https://www.youtube.com/watch?v=2nGKqH26xlg');
  

}, 2 * 60 * 60 * 1000)  // break every two hours
