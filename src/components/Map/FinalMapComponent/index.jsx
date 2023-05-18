import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { onValue } from 'firebase/database'

import User from '../../../firebase'
import FinalStepStage from './FinalStepStage'

const datesOfSteps = [
  new Date('Mon May 01 2023 00:00:00 GMT-0300'),
  new Date('Thu May 18 2023 00:00:00 GMT-0300'),
  new Date('Thu May 25 2023 00:00:00 GMT-0300'),
  new Date('Thu Jun 01 2023 00:00:00 GMT-0300'),
  new Date('Thu Jun 08 2023 00:00:00 GMT-0300'),
  new Date('Thu Jun 15 2023 00:00:00 GMT-0300'),
  new Date('Thu Jun 22 2023 00:00:00 GMT-0300'),
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
      <svg
      className='map-background'
        width='1191'
        height='547'
        viewBox='0 0 1191 547'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.2'
          d='M0.0366821 207.43H105.855C114.739 207.43 123.535 209.18 131.742 212.581C139.949 215.982 147.406 220.966 153.687 227.249C159.969 233.533 164.951 240.993 168.351 249.202C171.75 257.412 173.5 266.211 173.5 275.098V466.326C173.53 484.253 180.67 501.436 193.353 514.101C206.035 526.767 223.224 533.881 241.145 533.881H376.614C394.516 533.851 411.676 526.724 424.334 514.062C436.992 501.399 444.117 484.234 444.146 466.326V147.702C444.146 129.775 451.258 112.581 463.919 99.8939C476.581 87.207 493.757 80.0646 511.678 80.0347H653.507C671.427 80.0646 688.604 87.207 701.266 99.8939C713.927 112.581 721.038 129.775 721.038 147.702V407.681C721.038 425.627 728.165 442.839 740.851 455.529C753.537 468.219 770.743 475.348 788.683 475.348H918.177C936.118 475.348 953.324 468.219 966.009 455.529C978.695 442.839 985.822 425.627 985.822 407.681V80.6212C985.852 62.7137 992.976 45.5482 1005.63 32.8857C1018.29 20.2232 1035.45 13.0962 1053.35 13.0664H1190.38'
          stroke='url(#paint0_linear_103_678)'
          strokeWidth='25'
          strokeMiterlimit='10'
        />
        <defs>
          <linearGradient
            id='paint0_linear_103_678'
            x1='0.0366821'
            y1='273.429'
            x2='1190.38'
            y2='273.429'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#C673FF' />
            <stop offset='0.17' stopColor='#B66FF9' />
            <stop offset='0.49' stopColor='#8C66E8' />
            <stop offset='0.94' stopColor='#4957CD' />
            <stop offset='1' stopColor='#4055C9' />
          </linearGradient>
        </defs>
      </svg>
      <FinalStepStage
        isDisponible={changeSteps[0]}
        imageLink={''}
        stepName={'COLETA DE OLUC'}
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
          stepName={'RERREFINO E HIDROTRATAMENTO'}
          stepNumber={'2'}
          rightPosition='280px'
          stepToGo={'/questions/11'}
          stepPoints={userData.userStepScore.fase02.score}
          stepTime={datesOfSteps[1]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
        <FinalStepStage
          isDisponible={changeSteps[2]}
          imageLink={''}
          stepName={'PRODUÇÃO INDUSTRIAL: PRODUTOS ACABADOS E DESTINO'}
          stepNumber={'3'}
          rightPosition='150px'
          stepToGo={'/questions/21'}
          stepPoints={userData.userStepScore.fase03.score}
          stepTime={datesOfSteps[2]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
        <FinalStepStage
          isDisponible={changeSteps[3]}
          imageLink={''}
          stepName={'PRODUÇÃO INDUSTRIAL: Gestão de Resíduos'}
          stepNumber={'4'}
          rightPosition='16px'
          stepToGo={'/questions/31'}
          stepPoints={userData.userStepScore.fase04.score}
          stepTime={datesOfSteps[3]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'column-reverse' },
          justifyContent: 'center',
          gap: '12px',
        }}>
        <FinalStepStage
          isDisponible={changeSteps[4]}
          imageLink={''}
          stepName={'PROJETOS SOCIAIS'}
          stepNumber={'5'}
          rightPosition='270px'
          stepToGo={'/questions/41'}
          stepPoints={userData.userStepScore.fase05.score}
          stepTime={datesOfSteps[4]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
        <FinalStepStage
          isDisponible={changeSteps[5]}
          imageLink={''}
          stepName={' SUSTENTABILIDADE'}
          stepNumber={'6'}
          rightPosition='145px'
          stepToGo={'/questions/51'}
          stepPoints={userData.userStepScore.fase06.score}
          stepTime={datesOfSteps[5]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
        <FinalStepStage
          isDisponible={changeSteps[6]}
          imageLink={''}
          stepName={'GESTÃO DE PESSOAS'}
          stepNumber={'7'}
          rightPosition='16px'
          stepToGo={'/questions/61'}
          stepPoints={userData.userStepScore.fase07.score}
          stepTime={datesOfSteps[6]}
          stepDispo={0}
          stepStop={userData.stepStop.stepStop}
        />
      </Box>
    </Box>
  )
}
export default FinalMapComponent
