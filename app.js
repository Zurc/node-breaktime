const opn = require('opn');

setInterval(() => {

  opn('https://www.youtube.com/watch?v=d-diB65scQU');

}, 2 * 60 * 60 * 1000)  // break every two hours
