import { AppState } from "../AppState.js"
import { triviaService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawActiveQuestion() {
  console.log('draw the active question')
  let content = AppState.activeQuestion.drawActive
  setHTML('questions', content)
}
function _drawQuestions() {
  let content = ''
  AppState.questions.forEach(q => content += q.getTrivia)
  setHTML('questions', content)
}
export class TriviaController {
  constructor() {
    console.log('Trivia Controller Connected')
    AppState.on('questions', _drawQuestions)
  }
  async getTrivia() {
    console.log('Getting the API data')
    await triviaService.getTrivia()
    console.log(AppState.questions)
  }

  async getArtTrivia() {
    console.log('getting ART Trivia')
    await triviaService.getArtTrivia()
    console.log(AppState.questions)
  }

  async getMythologyTrivia() {
    console.log('getting Mythology Trivia')
    await triviaService.getMythologyTrivia()
    console.log(AppState.questions)
  }

  async getAnimalTrivia() {
    console.log('getting Animal Trivia')
    await triviaService.getAnimalTrivia()
    console.log(AppState.questions)
  }

  async setActiveQuestion(question) {
    console.log('setting question')
    await triviaService.setActiveQuestion(question)
    console.log(question)
    _drawActiveQuestion()
  }

  checkAnswer(answer) {
    // debugger
    console.log('Answering the Question')
    console.log(answer)
    if (answer == AppState.activeQuestion.correct) {
      Pop.success('You Got it Right!')
      console.log('You got it right!')
    } else {
      Pop.error('You got it Wrong!')
      console.log('You Blew It!')
    }
  }

}