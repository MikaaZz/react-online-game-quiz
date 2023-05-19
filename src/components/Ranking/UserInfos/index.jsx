import { Avatar, Box, Typography } from '@mui/material'

function UserInfos({ userName, userAllPoints, isUserData }) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: isUserData ? '#fff' : '',
        color: isUserData ? '#042B56' : '#fff',
        borderRadius: '8px',
        gap: 2,
        padding: 2,
        width: '100%',
      }}>
      <Avatar
        sx={{
          height: '60px',
          width: '60px',
        }}
      />
      <Box>
        <Typography sx={{ fontWeight: 'bold', fontFamily: 'poppins' }}>{userName}</Typography>
        <Typography sx={{ fontSize: '14px', fontFamily: 'poppins' }}>
          {userAllPoints} points
        </Typography>
      </Box>
    </Box>
  )
}
export default UserInfos
