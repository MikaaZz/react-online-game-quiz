import { Box, Typography } from '@mui/material'

function StepNumber({ stepNumber }) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #FFFFFF 19.32%, #F2F2F2 86.77%)',
        borderRadius: '9999px',
        boxShadow: 'inset 0px 1px 4px #293591',
        padding: '1.33rem 2.5rem',
      }}>
      <Typography
        sx={{
          color: '#293591',
          fontSize: '40px',
          fontFamily: 'Gameplay',
          fontWeight: 'bold',
        }}>
        {stepNumber}
      </Typography>
    </Box>
  )
}
export default StepNumber
