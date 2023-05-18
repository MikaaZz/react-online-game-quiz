import { Box } from '@mui/material'
import StepDisplay from './StepDisplay'
import StepNumber from './StepNumber'
import { Link } from 'react-router-dom'
import { Check } from '@mui/icons-material'

function StepStage({
  isDisponible,
  imageLink,
  stepNumber,
  stepName,
  stepTime,
  stepPoints,
  leftPosition = '',
  rightPosition = '',
  stepToGo,
  stepDispo,
  stepStop,
}) {
  if (stepStop > stepDispo && isDisponible) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Check
          sx={{
            position: 'absolute',
            height: '80px',
            width: '80px',
            zIndex: '10',
          }}
        />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'center',
            opacity: '70%',
            transition: 'all 300ms',
            left: leftPosition != '' ? { xs: '0px', lg: leftPosition } : '',
            right: rightPosition != '' ? { xs: '0px', lg: rightPosition } : '',
          }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              justifyContent: 'center',
            }}>
            <StepNumber stepNumber={stepNumber} />
            <img src={imageLink} alt='' />
          </Box>
          <StepDisplay
            isDisponible={isDisponible}
            stepName={stepName}
            stepNumber={stepNumber}
            stepTime={stepTime}
            stepPoints={stepPoints}
          />
        </Box>
      </Box>
    )
  }
  if (stepDispo === stepStop && isDisponible) {
    return (
      <Link to={stepToGo}>
        <Box
          sx={{
            alignItems: 'center',
            cursor: isDisponible ? 'pointer' : 'default',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'center',
            opacity: '100%',
            transition: 'all 300ms',
            ':hover': {
              transform: isDisponible ? 'scale(1.05)' : '',
            },
            position: 'relative',
            left: leftPosition != '' ? { xs: '0px', lg: leftPosition } : '',
            right: rightPosition != '' ? { xs: '0px', lg: rightPosition } : '',
          }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              justifyContent: 'center',
            }}>
            <StepNumber stepNumber={stepNumber} />
            <img src={imageLink} alt='' />
          </Box>
          <StepDisplay
            isDisponible={isDisponible}
            stepName={stepName}
            stepNumber={stepNumber}
            stepTime={stepTime}
            stepPoints={stepPoints}
          />
        </Box>
      </Link>
    )
  }
  return (
    <Box
      sx={{
        alignItems: 'center',
        cursor: isDisponible ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        justifyContent: 'center',
        opacity: '40%',
        transition: 'all 300ms',
        ':hover': {
          transform: isDisponible ? 'scale(1.05)' : '',
        },
        position: 'relative',
        left: leftPosition != '' ? { xs: '0px', lg: leftPosition } : '',
        right: rightPosition != '' ? { xs: '0px', lg: rightPosition } : '',
      }}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          justifyContent: 'center',
        }}>
        <StepNumber stepNumber={stepNumber} />
        <img src={imageLink} alt='' />
      </Box>
      <StepDisplay
        isDisponible={isDisponible}
        stepName={stepName}
        stepNumber={stepNumber}
        stepTime={stepTime}
        stepPoints={stepPoints}
      />
    </Box>
  )
}
export default StepStage
