import { generateId } from "../utils/generateId.js"

export class Trivia {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct = data.correct_answer
    this.incorrect = data.incorrect_answers
    this.id = data.id || generateId()
  }

  get getTrivia() {
    return `<div class="col-3 card p-3" onclick="app.TriviaController.setActiveQuestion('${this.id}')">
    <h2>Difficulty: ${this.difficulty}</h2>
    <p>Category: ${this.category}</p>
    <h2>Question: ${this.question}</h2>
    </div>`
  }

  get drawActive() {
    return `<div class="col-12 card p-3" ">
    <h2>${this.difficulty}</h2>
    <p>${this.category}</p>
    <h2>${this.question}</h2>
    <section class="row">
    <div class="col-6">
    <button onclick="app.TriviaController.checkAnswer('${this.incorrect[0]}')"><p>${this.incorrect[0]}</p></button>
    </div>
    <div class="col-6">
    <button onclick="app.TriviaController.checkAnswer('${this.incorrect[1]}')"><p>${this.incorrect[1]}</p></button>
    </div>
    <div class="col-6">
    <button onclick="app.TriviaController.checkAnswer('${this.incorrect[2]}')"><p>${this.incorrect[2]}</p></button>
    </div>
    <div class="col-6">
    <button onclick="app.TriviaController.checkAnswer('${this.incorrect[3]}')"><p>${this.incorrect[3]}</p></button>
    </div>
    </section>
    </div>`
  }
}