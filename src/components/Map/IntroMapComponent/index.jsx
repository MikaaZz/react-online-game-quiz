import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { onValue } from 'firebase/database'
import StepStage from '../../StepStage'
import User from '../../../firebase'

function IntroMapComponent() {
  const user = new User()
  const datesOfSteps = [
    new Date('Mon May 01 2023 00:00:00 GMT-0300'),
    new Date('Thu May 27 2023 00:00:00 GMT-0300'),
  ]
  const booleanOfSteps = Array(2).fill(false)
  const [changeSteps, setChangeSteps] = useState(Array(2).fill(false))
  const [userData, setUserData] = useState('')

  useEffect(() => {
    const now = new Date()
    datesOfSteps.forEach((date, index) => {
      now >= date
        ? (booleanOfSteps[index] = true)
        : (booleanOfSteps[index] = false)
      setChangeSteps(booleanOfSteps)
    })
  }, [])
  useEffect(() => {
    async function fetchItems() {
      return onValue(user.reference, (snapshot) => {
        const data = snapshot.val()
        setUserData(data)
      })
    }
    fetchItems()
  }, [])

  if (!userData) {
    return <p>Loading data...</p>
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'rgba(12, 12, 12, 0.5)',
        backdropFilter: 'blur(10px)',
        borderRadius: '2rem',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: 'space-around',
        minHeight: '500px',
        marginBottom: '2rem',
        padding: '2rem 0',
        position: 'relative',
        width: '80vw',
      }}>
      <StepStage
        isDisponible={changeSteps[0]}
        imageLink={''}
        stepName={'Step 01 title'}
        stepNumber={'1'}
        stepToGo={'/questions/1'}
        stepPoints={userData.userStepScore.fase01.score}
        stepTime={parseInt(userData.userStepTime.fase01.time)}
        stepDispo={0}
        stepStop={userData.stepStop.stepStop}
      />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'column-reverse' },
          justifyContent: 'center',
          gap: '12px',
        }}>
        <StepStage
          isDisponible={changeSteps[1]}
          imageLink={''}
          stepName={'Step 02 title'}
          stepNumber={'2'}
          rightPosition='280px'
          stepToGo={'/questions/11'}
          stepPoints={userData.userStepScore.fase02.score}
          stepTime={parseInt(userData.userStepTime.fase02.time)}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
      </Box>
    </Box>
  )
}
export default IntroMapComponent
