import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"

class TriviaService {
  async getTrivia() {
    console.log('Getting Trivia from the Service')
    const response = await fetch('https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple')
    const data = await response.json()
    console.log(data.results)
    let newQuestions = data.results.map(q => new Trivia(q))
    AppState.questions = newQuestions
  }

  async getArtTrivia() {
    console.log('Getting Trivia from the Service')
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=25&difficulty=medium')
    const data = await response.json()
    console.log(data.results)
    let newQuestions = data.results.map(q => new Trivia(q))
    AppState.questions = newQuestions
  }

  async getMythologyTrivia() {
    console.log('Getting Trivia from the Service')
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard&type=multiple')
    const data = await response.json()
    console.log(data.results)
    let newQuestions = data.results.map(q => new Trivia(q))
    AppState.questions = newQuestions
  }

  async getAnimalTrivia() {
    console.log('Getting Trivia from the Service')
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')
    const data = await response.json()
    console.log(data.results)
    let newQuestions = data.results.map(q => new Trivia(q))
    AppState.questions = newQuestions
  }

  setActiveQuestion(question) {
    console.log('setting active question')
    let foundQuestion = AppState.questions.find(q => q.id == question)
    AppState.activeQuestion = foundQuestion
    console.log('found Question:', AppState.activeQuestion)
    this.combineAnswers()
  }

  combineAnswers() {
    let randomIndex = Math.floor(Math.random() * 3.99)
    console.log(randomIndex)
    AppState.activeQuestion.incorrect.splice([randomIndex], 0, AppState.activeQuestion.correct)
    console.log(AppState.activeQuestion)
  }
}

export const triviaService = new TriviaService