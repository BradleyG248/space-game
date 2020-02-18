import store from "../store.js";
import Meteor from "../Models/Meteor.js";

class MeteorsService {

  shower() {
    store.State.meteors.forEach(meteor => {
      meteor.y += meteor.v;
      if (meteor.y > 99) {
        meteor.y = 0;
        meteor.x = Math.random() * 100;
        meteor.v = Math.random() + 0.5;
      }
      store.commit("meteors", store.State.meteors);
    })
  }
  makeMeteors(num) {
    let meteors = [];
    console.log("makeMeteors is running")
    for (let i = 0; i < num; i++) {
      meteors.push(new Meteor({ x: Math.random() * 98, y: 0, v: Math.random() + 0.5, id: i }));
    }
    store.commit("meteors", meteors);
    console.log(meteors)
  }
}

const service = new MeteorsService();
export default service;
