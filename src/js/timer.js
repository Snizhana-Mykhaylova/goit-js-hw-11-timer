class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.interval = null;
    this.refs = {
      days: this.selector.querySelector('span[data-value="days"]'),
      hours: this.selector.querySelector('span[data-value="hours"]'),
      mins: this.selector.querySelector('span[data-value="mins"]'),
      secs: this.selector.querySelector('span[data-value="secs"]'),
    };
  }

  start() {
    // вызывает функцию upDateTimerFace перед setInterval чтобы обхитрить задержку 1000 мс))
    if (localStorage['deltaTime']) {
      const deltaTime = window.localStorage.getItem('deltaTime');
      this.upDateTimerFace(deltaTime);
    }

    this.interval = setInterval(() => {
      const currentTime = Date.now();
      const targetTime = this.targetDate.getTime();
      const deltaTime = targetTime - currentTime;

      // на случай если день Х наступил))
      if (deltaTime <= 0) {
        stopInterval();
      }

      this.upDateTimerFace(deltaTime);
      this.setInLocalStorage(deltaTime);
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.interval);
    this.refs.days.textContent = '00';
    this.refs.hours.textContent = '00';
    this.refs.mins.textContent = '00';
    this.refs.secs.textContent = '00';
  }

  setInLocalStorage(deltaTime) {
    localStorage.setItem('deltaTime', deltaTime);
  }

  upDateTimerFace(time) {
    const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
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
// setTimeout(() => timer.stopInterval(), 5000);
