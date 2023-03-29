export class CountDown {
  timeRemaining: number;
  onRender: Function; // a callback that is responsible for rendering the countdown timer
  onComplete: Function; // and another callback that will be called when the countdown completes.

  constructor(expiredDate: Date, onRender: Function, onComplete: Function) {
    this.timeRemaining = 100;
    this.onRender = onRender;
    this.onComplete = onComplete;
    this.setExpiredDate(expiredDate);
  }

  setExpiredDate(expiredDate: Date) {
    const currentTime: number = new Date().getTime();
    this.timeRemaining = expiredDate.getTime() - currentTime;
    this.timeRemaining <= 0 ? this.complete() : this.start();
  }

  complete() {
    this.onComplete();
  }

  getTime() {
    return {
      days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
      hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
      minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
      seconds: Math.floor(this.timeRemaining / 1000) % 60,
    };
  }

  update() {
    this.onRender(this.getTime());
  }

  start() {
    // update the countdown
    this.update();

    // setup a timer
    const intervalId = setInterval(() => {
      // update the timer
      this.timeRemaining -= 1000;

      if (this.timeRemaining < 0) {
        // call the callback
        this.complete();
        //clear the interval if expired
        clearInterval(intervalId);
      } else {
        this.update();
      }
    }, 1000);
  }
}
