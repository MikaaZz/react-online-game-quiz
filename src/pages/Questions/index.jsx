import QuestionsPage from './QuestionsPage'
import QuestionsJSON from '../../data/Qeustoes.json'
import { useParams } from 'react-router-dom'

function Questions() {
  const { questionNumber } = useParams()
  const dataArray = Object.values(QuestionsJSON)
  const questionsArray = dataArray
    .flatMap((step) => Object.values(step))
    .filter((question) => typeof question !== 'string')
  const question = questionsArray[questionNumber - 1]

  return (
    <QuestionsPage
      stepTitle={question.stepTitle}
      fase={question.fase}
      questionNumber={question.questionNumber}
      questionStatement={question.statement}
      questionIntroduction={question.introduction}
      optionOne={question.option01}
      optionTwo={question.option02}
      optionThree={question.option03}
      option_correct={question.option_correct}
      correctFeedback={question.correct_feedback}
      wrongFeedback={question.wrong_feedback}
      contentLink={question.content_link}
      accessLink={question.link}
    />
  )
}
export default Questions
