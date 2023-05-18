import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import PointsDisplay from './PointsDisplay'

function StepDisplay({ stepTime }) {
  const [timeLeft, setTimeLeft] = useState(stepTime - new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(stepTime - new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [stepTime])

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)

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
        component={'h3'}
        sx={{
          backgroundColor: '#99DA21',
          borderRadius: '9999px',
          color: '#293591',
          textTransform: 'uppercase',
          padding: '.5rem 2rem',
          fontFamily: 'Gameplay',
          fontWeight:'bold'
        }}>
        Faltam
      </Typography>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Typography
          component={'h3'}
          sx={{
            color: 'white',
            maxWidth: '320px',
            textAlign: 'center',
            fontSize: { xs: '14px', xl: '16px' },
            fontFamily: 'Gameplay',
            textTransform: 'uppercase',
            fontWeight:'bold'
          }}>
          {stepTime < new Date()
            ? 'Etapa liberada!'
            : `${days} dias, ${hours} horas, ${minutes} minutos`}
        </Typography>
        <PointsDisplay isDisponible={stepTime < new Date()} />
      </Box>
    </Box>
  )
}
export default StepDisplay
