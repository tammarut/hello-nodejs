import BooleanQuestion from './booleanQuestion'
import MultipleChoiceQuestion from './multipleChoiceQuestion'
import textQeustion from './textQuestion'
import rangeQuestion from './rangeQuestion'
import profileQuestion from './profileQuestion'

function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description)
    question.printQeustionChoices()
    console.log('')
  })
}

const questions = [
  new BooleanQuestion('↪This video is useful.'),
  new MultipleChoiceQuestion('↪What is your favorite language?', ['Red', 'Blue', 'Orange']),
  new textQeustion('↪Describe your favorite Color.'),
  new rangeQuestion('↪What is the speed?'),
  new profileQuestion('↪What is your name?'),
]

printQuiz(questions)
