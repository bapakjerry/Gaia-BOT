// config/countdown.js
export class CountdownTimer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start(callback) {

const interval = setInterval(() => {
      if (this.seconds <= 0) {
        clearInterval(interval);
        callback();
      } else {
        console.log(`${this.seconds} seconds remaining...`);
        this.seconds -= 1;
      }
    }, 1000);
  }
}
