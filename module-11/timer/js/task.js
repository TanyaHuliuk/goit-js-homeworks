'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.htmlTimer = document.querySelector(selector);

    this.refs = {
      htmlDays: this.htmlTimer.querySelector('[data-value=days]'),
      htmlHours: this.htmlTimer.querySelector('[data-value=hours]'),
      htmlMins: this.htmlTimer.querySelector('[data-value=mins]'),
      htmlSecs: this.htmlTimer.querySelector('[data-value=secs]'),
    };

    this.targetDate = targetDate;
    this.reversClock();
  }

  reversClock() {
    const intervalId = setInterval(() => {
      let time = this.targetDate - Date.now();

      if (time <= 0) {
        clearInterval(this.timerID);
        return;
      }

      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
        3,
        '0',
      );
      const hours = String(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      const mins = String(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      const secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
        2,
        '0',
      );

      this.insertInHtml(days, hours, mins, secs);
    }, 1000);
  }

  insertInHtml(days, hours, mins, secs) {
    this.refs.htmlDays.textContent = days;
    this.refs.htmlHours.textContent = hours;
    this.refs.htmlMins.textContent = mins;
    this.refs.htmlSecs.textContent = secs;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 30, 2020'),
});
