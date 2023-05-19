import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { onValue } from 'firebase/database'

import User from '../../../firebase'
import FinalStepStage from './FinalStepStage'

const datesOfSteps = [
  new Date('Mon May 01 2023 00:00:00 GMT-0300'),
  new Date('Thu May 27 2023 00:00:00 GMT-0300'),
]

function FinalMapComponent() {
  const user = new User()
  const booleanOfSteps = Array(7).fill(false)

  const [changeSteps, setChangeSteps] = useState(Array(7).fill(false))
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
        position: 'relative',
        padding: 4,
        width: { xs: '95vw', lg: '80vw' },
      }}>
      <FinalStepStage
        isDisponible={changeSteps[0]}
        imageLink={''}
        stepName={'Step 01'}
        stepNumber={'1'}
        stepToGo={'/questions/1'}
        stepPoints={userData.userStepScore.fase01.score}
        stepTime={datesOfSteps[0]}
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
        <FinalStepStage
          isDisponible={changeSteps[1]}
          imageLink={''}
          stepName={'Step 02'}
          stepNumber={'2'}
          rightPosition='280px'
          stepToGo={'/questions/11'}
          stepPoints={userData.userStepScore.fase02.score}
          stepTime={datesOfSteps[1]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
      </Box>
    </Box>
  )
}
export default FinalMapComponent
