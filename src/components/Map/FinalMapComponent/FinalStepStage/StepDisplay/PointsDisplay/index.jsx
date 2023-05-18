import { Typography } from '@mui/material'

function PointsDisplay({isDisponible}) {

  return (
    <Typography sx={{ color: 'white', fontFamily: 'poppins', }}>
      {isDisponible ? '' : 'Para liberar'}
    </Typography>
  )
}
export default PointsDisplay
