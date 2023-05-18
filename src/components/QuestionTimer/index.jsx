import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

function QuestionTimer({ timeRemaining }) {
  const [time, setTime] = useState(timeRemaining)

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [time])

  return (
    <Box>
      Time left: {time} seconds
    </Box>
  )
}
export default QuestionTimer
