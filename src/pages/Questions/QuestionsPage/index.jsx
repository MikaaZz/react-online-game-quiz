import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { User } from '../../../firebase'
import { onValue } from '@firebase/database'
import {
  backgroundImage,
  backgroundShape,
  clockIcon,
} from '../../../assets/images'
import Feedback from './components/Feedback'
import { Warning } from '@mui/icons-material'

const INITIAL_TIME_LIMIT = 120000
const pointsToCorrectAnswer = 20

function QuestionsPage({
  stepTitle,
  fase,
  questionNumber,
  questionIntroduction,
  questionStatement,
  optionOne,
  optionTwo,
  optionThree,
  option_correct,
  correctFeedback,
  wrongFeedback,
  contentLink,
  accessLink,
}) {
  const optionsLabel = [optionOne, optionTwo, optionThree]
  const correctAnswer = option_correct
  const questionNumberFromUrl = useParams()
  const nextQuestion = parseInt(questionNumberFromUrl.questionNumber)

  const [userAnswer, setUserAnswer] = useState(undefined)
  const [userRespondQuestion, setUserRespondQuestion] = useState(false)

  const [userScore, setUserScore] = useState()
  const [userTotalScore, setUserTotalScore] = useState(0)

  const [userTime, setUserTime] = useState()
  const [userTotalTime, setUserTotalTime] = useState(0)

  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME_LIMIT)
  const [startTimer, setStartTimer] = useState(true)

  const [userStepStop, setUserStepStop] = useState(0)
  const [hiddenPopUp, setHiddenPopUp] = useState(false)

  const list_steps = [
    'fase01',
    'fase02'
  ]
  const user = new User()

  function handleSubmit() {
    if (userAnswer) {
      setUserRespondQuestion(true)
      getUserData()
      writeUserTime()
      if (userAnswer === correctAnswer) {
        writeUserScore()
      }
      setStartTimer(false)
    }
  }
  function writeUserScore() {
    user.writeUserStepScore(list_steps[fase], userScore + pointsToCorrectAnswer)
    user.writeUserTotalScore(userTotalScore + pointsToCorrectAnswer)
  }
  function writeUserTime() {
    user.writeUserStepTime(
      list_steps[fase],
      userTime + (120000 - timeRemaining)
    )
    user.writeUserTotalStepTime(userTotalTime + (120000 - timeRemaining))
  }
  function writeUserStepStop() {
    user.writeUserStepStop(userStepStop + 1)
  }
  function sendQuestionButton() {
    return (
      <button
        className='main-button'
        onClick={() => {
          handleSubmit()
        }}>
        Submit
      </button>
    )
  }
  function nextPage() {
    if (
      parseFloat(questionNumberFromUrl.questionNumber) === 10
    ) {
      return (
        <Link to={`/conquistas`}>
          <button
            className='main-button'
            onClick={() => {
              setUserRespondQuestion(false)
              writeUserStepStop()
              setUserScore(0)
            }}>
            Finish step
          </button>
        </Link>
      )
    }
    if (parseFloat(questionNumberFromUrl.questionNumber) === 20) {
      return (
        <Link to={`/conquistasfinais`}>
          <button
            className='main-button'
            onClick={() => {
              setUserRespondQuestion(false)
              setUserScore(0)
            }}>
            Finish step
          </button>
        </Link>
      )
    }
    return (
      <Link to={`/questions/${nextQuestion + 1}`}>
        <button
          className='main-button'
          onClick={() => {
            setTimeRemaining(INITIAL_TIME_LIMIT)
            setUserRespondQuestion(false)
            setStartTimer(true)
            setUserScore(0)
          }}>
          Next question
        </button>
      </Link>
    )
  }
  function getUserData() {
    return onValue(user.reference, (snapshot) => {
      const data = snapshot.val()

      const getUserScore = parseInt(
        Object.values(data.userStepScore[list_steps[fase]]).join('')
      )
      const getUserTotalScore = data.userTotalScore.userTotalScore

      setUserScore(getUserScore)
      setUserTotalScore(getUserTotalScore)

      const getUserStepTime = parseInt(
        Object.values(data.userStepTime[list_steps[fase]])
      )
      const getUserTotalTime = data.userTotalTime.userTotalTime

      setUserTime(getUserStepTime)
      setUserTotalTime(getUserTotalTime)

      const getUserStepStop = data.stepStop.stepStop
      setUserStepStop(getUserStepStop)
    })
  }
  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1000)
        if (timeRemaining <= 1000) {
          setTimeRemaining(0)
          setUserAnswer(10)
          handleSubmit()
          clearInterval(timer)
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [timeRemaining, startTimer])

  useEffect(() => {
    getUserData()
    if (nextQuestion === 1) setStartTimer(false)
  }, [userScore])

  const minutes = Math.floor(timeRemaining / 60000)
  const seconds = ((timeRemaining % 60000) / 1000).toFixed(0)

  return (
    <>
      {nextQuestion === 1 ? (
        <Box
          sx={{
            alignItems: 'center',
            display: hiddenPopUp ? 'none' : 'flex',
            justifyContent: 'center',
            flexDirection: 'column',

            backgroundColor: 'rgba(12, 12, 12, 0.5)',
            position: 'absolute',
            minHeight: '100vh',
            width: '100vw',
            zIndex: '100',
          }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              alignItems: 'center',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',

              width: '370px',
              zIndex: '100',
            }}>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                backgroundColor: '#293591',
                borderRadius: '10px 10px 0 0',
                marginBottom: '4px',
                padding: 2,
                width: '100%',
              }}>
              <Warning sx={{ height: '50px', width: '50px' }} />
            </Box>
            <Typography
              sx={{
                fontFamily: 'poppins',
                padding: 1,
                color: '#293591',
                textAlign: 'center',
              }}>
              You have two minutes to answer each question.
              After that time, if you have not answered, your answer will be
              considered incorrect.
            </Typography>
            <Typography
              sx={{
                fontFamily: 'poppins',
                padding: 1,
                color: '#293591',
                textAlign: 'center',
              }}>
              For each correct answer, you get 20 points. If you get it wrong, you
              points. Think well before answering, each question can only be answered once.
              answered only once.
            </Typography>
            <Typography
              sx={{
                fontFamily: 'poppins',
                padding: 1,
                color: '#293591',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Let&apos;s learn and have fun?
            </Typography>
            <button
              onClick={() => {
                setHiddenPopUp(true)
                setStartTimer(true)
              }}
              className='main-button'
              style={{ width: '280px' }}>
              Start
            </button>
          </Box>
        </Box>
      ) : (
        ''
      )}
      <Box
        sx={{
          alignItems: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4,
          minHeight: '100vh',
          position: 'relative',
          paddingBottom: 4,
          width: '100vw',
        }}>
        <img
          src={backgroundShape}
          style={{
            height: '600px',
            position: 'absolute',
            top: '0px',
            width: '100%',
          }}
        />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'center',
            gap: 4,
            width: '100%',
            zIndex: '10',
          }}>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '60px',

              textTransform: 'uppercase',
              textAlign: { xs: 'center', lg: 'left' },
              textShadow: '4px 8px 0px #2A3690',
              zIndex: '10',
              fontWeight: 'bold',
            }}>
            {stepTitle}
          </Typography>
          {}
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: '#293591',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '16px',
              color: '#fff',
              display: 'flex',
              gap: 1,
              fontSize: '20px',
              fontWeight: 'bold',
              padding: '16px 32px',
              textAlign: 'center',
            }}>
            <img
              src={clockIcon}
              alt=''
              style={{ marginRight: '8px', width: '40px' }}
            />
            {minutes}:{seconds < 10 ? '0' : ''}
            {seconds}
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '2px 2px 8px rgba(0,0,0,.4)',
            padding: '1rem 2rem',
            zIndex: '10',
          }}>
          <Typography
            sx={{
              color: '#293591',
              fontSize: '18px',

              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}>
            Question {questionNumber} of 10
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(12, 12, 12, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'space-around',
            minHeight: '500px',
            position: 'relative',
            padding: 4,
            width: { xs: '95vw', lg: '80vw' },
            zIndex: '10',
          }}>
          <Typography
            component={'p'}
            sx={{
              textAlign: 'center',
              width: { xs: '90%', lg: '70%' },
              marginBottom: 2,
              fontFamily: 'Poppins',
            }}>
            {questionIntroduction}
          </Typography>
          <Typography
            component={'h2'}
            sx={{
              fontFamily: 'Poppins',
              fontSize: '32px',
              fontWeight: 'bold',
              textAlign: 'center',
              width: { xs: '90%', lg: '70%' },
            }}>
            {questionStatement}
          </Typography>
          <FormControl sx={{ width: '90%' }}>
            <RadioGroup
              name='radio-buttons-group'
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              {userRespondQuestion
                ? optionsLabel.map((option, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio sx={{ path: { fill: '#fff' } }} />}
                        label={option}
                        sx={{
                          backgroundColor:
                            userAnswer === index + 1
                              ? correctAnswer === userAnswer
                                ? '#63C791'
                                : '#C76363'
                              : '',
                          padding: '8px 16px',
                          borderRadius: 1,
                          maxWidth: '420px',
                          width: '100%',
                          fontFamily: 'Poppins',
                          margin: '0 auto',
                          justifyContent: 'center',
                        }}
                        disabled
                      />
                    )
                  })
                : optionsLabel.map((option, index) => {
                    return (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio sx={{ path: { fill: '#fff' } }} />}
                        label={option}
                        sx={{
                          margin: '0 auto',
                          maxWidth: '420px',
                          width: '100%',
                          fontFamily: 'Poppins',
                          justifyContent: 'center',
                        }}
                        onClick={() => {
                          setUserAnswer(index + 1)
                        }}
                      />
                    )
                  })}
            </RadioGroup>
          </FormControl>
          {userRespondQuestion ? (
            userAnswer === correctAnswer ? (
              <Feedback
                feedbackText={correctFeedback}
                feedbackContent={contentLink}
                feedbackLink={accessLink}
              />
            ) : (
              <Feedback
                feedbackText={wrongFeedback}
                feedbackContent={contentLink}
                feedbackLink={accessLink}
              />
            )
          ) : (
            ''
          )}
          {userRespondQuestion ? nextPage() : sendQuestionButton()}
        </Box>
      </Box>
    </>
  )
}
export default QuestionsPage
