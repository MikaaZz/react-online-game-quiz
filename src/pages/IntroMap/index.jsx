import { Box, Typography } from '@mui/material'

import { backgroundImage, backgroundShape } from '../../assets/images'
import BackButton from '../../components/Buttons/BackButton'
import IntroMapComponent from '../../components/Map/IntroMapComponent'

function IntroMap() {
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
          sx={{
            color: '#fff',
            fontSize: '60px',

            textTransform: 'uppercase',
            textAlign: { xs: 'center', lg: 'left' },
            textShadow: '4px 8px 0px #2A3690',
            zIndex: '10',
            fontWeight: 'bold',
          }}>
          Select to play
        </Typography>
      </Box>
      <IntroMapComponent />
    </Box>
  )
}
export default IntroMap
