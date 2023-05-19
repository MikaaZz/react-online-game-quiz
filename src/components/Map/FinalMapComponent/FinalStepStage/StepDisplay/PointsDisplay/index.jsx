import { Typography } from '@mui/material'

function PointsDisplay({isDisponible}) {

  return (
    <Typography sx={{ color: 'white', fontFamily: 'poppins', }}>
      {isDisponible ? '' : 'To stay available'}
    </Typography>
  )
}
export default PointsDisplay
