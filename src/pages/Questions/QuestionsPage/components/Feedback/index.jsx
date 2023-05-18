import { Box, Link, Typography } from '@mui/material'

function Feedback({ feedbackText, feedbackContent, feedbackLink }) {
  return (
    <Box sx={{ margin: '32px 0' }}>
      <Typography
        component={'p'}
        sx={{
          fontSize: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 1,
          fontFamily: 'Poppins',
        }}>
        {feedbackText}
      </Typography>
      <Link
        href={feedbackLink}
        target='_blank'
        sx={{
          textDecoration: 'none',
          ':hover': { textDecoration: 'underline' },
        }}>
        <Typography
          component={'p'}
          sx={{
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Poppins',
          }}>
          {feedbackContent}
        </Typography>
      </Link>
    </Box>
  )
}
export default Feedback
