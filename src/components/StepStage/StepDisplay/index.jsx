import { Box, Typography } from '@mui/material'
import PointsDisplay from './PointsDisplay'

function StepDisplay({ stepNumber, stepName, stepTime, stepPoints }) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1,
      }}>
      <Typography
        sx={{
          backgroundColor: '#99DA21',
          borderRadius: '9999px',
          color: '#293591',
          textTransform: 'uppercase',
          padding: '.5rem 2rem',

          fontWeight: 'bold',
        }}>
        Step {stepNumber}
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Typography
          sx={{
            color: 'white',
            fontWeight: 'bold',
            maxWidth: '320px',
            textAlign: 'center',
            fontSize: { xs: '14px', xl: '16px' },
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
          }}>
          {stepName}
        </Typography>
        <PointsDisplay stepTime={stepTime} stepPoints={stepPoints} />
      </Box>
    </Box>
  )
}
export default StepDisplay
