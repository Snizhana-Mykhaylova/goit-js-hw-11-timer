class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const targetTime = this.targetDate.getTime();
      const deltaTime = targetTime - currentTime;

      this.upDateTimerFace(deltaTime);
    }, 1000);
  }

  upDateTimerFace(time) {
    const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    const refDays = this.selector.querySelector('span[data-value="days"]');
    const refHours = this.selector.querySelector('span[data-value="hours"]');
    const refMins = this.selector.querySelector('span[data-value="mins"]');
    const refSecs = this.selector.querySelector('span[data-value="secs"]');

    refDays.textContent = days;
    refHours.textContent = hours;
    refMins.textContent = mins;
    refSecs.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  padDays(value) {
    return String(value).padStart(3, '0');
  }
}

const timer = new CountdownTimer('#timer-1', new Date('Jul 17, 2021'));

timer.start();
