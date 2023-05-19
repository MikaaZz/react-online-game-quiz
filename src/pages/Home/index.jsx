import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import MainButton from '../../components/Buttons/MainButton'
import { Link } from 'react-router-dom'
import { backgroundImage } from '../../assets/images'
import { User } from '../../firebase'
import { onValue } from 'firebase/database'

function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState('')

  const user = new User()

  useEffect(() => {
    async function fetchItems() {
      return onValue(user.reference, (snapshot) => {
        const data = snapshot.val()
        setUserData(data)
      })
    }
    fetchItems()
  }, [user.reference])

  useEffect(() => {
    userData ? setIsLogin(true) : setIsLogin(false)
  }, [userData])

  return (
    <Box
      sx={{
        alignItems: { xs: 'center', lg: 'flex-start' },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'flex-end', lg: 'flex-end' },
        gap: 4,
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        width: '100vw',
      }}>
      <Box
        sx={{
          margin: {
            xs: '0 0 64px 0',
            lg: '0 0 64px 128px',
            position: 'relative',
            zIndex: '10',
          },
        }}>
        {isLogin ? (
          <Link to={'/mapa'}>
            <MainButton>Play</MainButton>
          </Link>
        ) : (
          <Link to={'/registro'}>
            <MainButton>Register</MainButton>
          </Link>
        )}
      </Box>
    </Box>
  )
}
export default Home
