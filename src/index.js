// joliko.js

const Simerfop = require('simerfop');

class Joliko {
  constructor() {
    this.scheduler = new Simerfop();
  }

  run() {
    console.log('Joliko is running!');
    this.scheduler.schedule(() => {
      console.log('Joliko task executed at', new Date());
    }, Date.now() + 3000); // Schedule task 3 seconds from now
  }
}

module.exports = Joliko;
