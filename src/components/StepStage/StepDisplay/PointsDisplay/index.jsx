import { Box, Typography } from '@mui/material'

function PointsDisplay({stepPoints = 0, stepTime = 0}) {

  const minutes = Math.floor(stepTime / 60000);
  const seconds = ((stepTime % 60000) / 1000).toFixed(0);

  return (
    <Typography sx={{ color: 'white',  }}>
      {stepPoints} Points | {minutes}:{seconds < 10 ? '0' : ''}{seconds}
    </Typography>
  )
}
export default PointsDisplay
