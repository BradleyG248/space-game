export default class Meteor {
  constructor(data) {
    this.x = data.x || 0,
      this.y = data.y || 0,
      this.v = data.v || 1,
      this.id = data.id
  }

  get Template() {
    return `<div class = "meteor" id = "${this.id}"></div>`
  }
}