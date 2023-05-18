import { Box } from '@mui/system'
import { backgroundImage, backgroundShape } from '../../../assets/images'
import { Typography } from '@mui/material'

import BackButton from '../../../components/Buttons/BackButton'
import Ranking from '../../../components/Ranking'
import FinalMapComponent from '../../../components/Map/FinalMapComponent'

function FinalConquest() {
  return (
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
          gap: 2,
          width: '90%',
        }}>
        <BackButton />
        <Typography
          component={'h1'}
          sx={{
            color: '#fff',
            fontSize: '60px',
            textTransform: 'uppercase',
            textAlign: { xs: 'center', lg: 'left' },
            textShadow: '4px 8px 0px #2A3690',
            zIndex: '10',
            fontFamily: 'Gameplay',
            fontWeight: 'bold',
          }}>
          Conquistas
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: 2,
          margin: '0 auto',
          padding: '0 16px',
          position: 'relative',
        }}>
        <FinalMapComponent />
        <Ranking maxNumberOfRenders={150} />
      </Box>
    </Box>
  )
}
export default FinalConquest
