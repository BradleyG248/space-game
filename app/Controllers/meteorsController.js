import MeteorService from "../Services/MeteorService.js";
import store from "../store.js";

//Private

function _setNum(num) {
  let meteors = store.State.meteors;
  let template = '';
  meteors.forEach(meteor => {
    template += meteor.Template;
  })
  document.getElementById("field").innerHTML = template;
}
function _draw() {
  let meteors = store.State.meteors;
  meteors.forEach(meteor => {
    document.getElementById(meteor.id).style.left = meteor.x + "vw";
    document.getElementById(meteor.id).style.top = meteor.y + "vh";
  })
}

//Public
export default class MeteorsController {
  constructor() {
    console.log("working?")
    MeteorService.makeMeteors(20);
    _setNum(10);
    store.subscribe("meteors", _draw);
    setInterval(MeteorService.shower, 20)
  }
}
