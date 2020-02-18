import MeteorsController from "./Controllers/MeteorsController.js";

class App {
  meteorsController = new MeteorsController();
}

window["app"] = new App();
