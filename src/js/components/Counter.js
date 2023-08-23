export default class Counter {
  constructor(element) {
    if (typeof elem === 'string') {
      element = document.querySelector(element)
    }
    this.element = element;
  }

  getKill() {
    return document.querySelector('.kill').textContent
  }

  getMiss() {
    return document.querySelector('.miss').textContent
  }

  checkElement() {
    return document.querySelector(this.element)
  }
}