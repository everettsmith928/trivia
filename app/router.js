import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { TriviaController } from "./controllers/TriviaController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: TriviaController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <button onclick="app.TriviaController.getTrivia()" class="btn btn-primary">Book Trivia</button>
      </div>
      <div class="card-body">
        <button onclick="app.TriviaController.getArtTrivia()" class="btn btn-primary">Art Trivia</button>
      </div>
      <div class="card-body">
        <button onclick="app.TriviaController.getMythologyTrivia()" class="btn btn-primary">Mythology Trivia</button>
      </div>
      <div class="card-body">
        <button onclick="app.TriviaController.getAnimalTrivia()" class="btn btn-primary">Animals Trivia</button>
      </div>
      <div class="container-fluid">
      <section class="row" id="questions">
      </section>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }


]