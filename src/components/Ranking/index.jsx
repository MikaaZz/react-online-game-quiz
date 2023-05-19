import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import UserInfos from './UserInfos'
import User from '../../firebase'
import { useEffect, useState } from 'react'
import { onValue } from '@firebase/database'

function Ranking({ maxNumberOfRenders }) {
  const user = new User()
  const [userData, setUserData] = useState('')
  const [datas, setDatas] = useState([])

  useEffect(() => {
    async function fetchItems() {
      return onValue(user.database, (snapshot) => {
        const data = snapshot.val()
        const usersData = []
        const arr_database = Object.entries(data)
        arr_database.forEach((database) => {
          usersData.push(database[1])
        })
        const sortUserDatas = usersData.sort(
          (a, b) =>
            a.userTotalTime.userTotalTime - b.userTotalTime.userTotalTime
        )
        setDatas(
          sortUserDatas.sort(
            (a, b) =>
              b.userTotalScore.userTotalScore - a.userTotalScore.userTotalScore
          )
        )
      })
    }
    fetchItems()
  }, [])

  useEffect(() => {
    async function fetchItems() {
      return onValue(user.reference, (snapshot) => {
        const data = snapshot.val()
        setUserData(data)
      })
    }
    fetchItems()
  }, [])

  return (
    <Box>
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: 'rgba(12, 12, 12, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: '2rem',
          display: 'flex',
          flexDirection: { xs: 'column' },
          justifyContent: 'flex-start',
          marginBottom: '2rem',
          padding: 2,
          position: 'relative',
          overflowY: 'scroll',
          height: '600px',
          minWidth: '320px',
          width: '100%',
        }}>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '40px',
            textTransform: 'uppercase',
            textAlign: { xs: 'center', lg: 'left' },
            textShadow: '4px 8px 0px #2A3690',
            zIndex: '10',

            fontWeight: 'bold',
          }}>
          Ranking
        </Typography>
        {!datas ? (
          <p>Loading data...</p>
        ) : (
          <Box
            sx={{
              alignItems: 'flex-start',
              display: 'flex',
              flexDirection: { xs: 'column' },
              justifyContent: 'flex-start',
              gap: 1,
              marginTop: 2,
              width: '100%',
            }}>
            {datas.map((database, index) => {
              if (index < maxNumberOfRenders) {
                return (
                  <UserInfos
                    key={index}
                    userAllPoints={database.userTotalScore.userTotalScore}
                    userName={database.userName}
                    isUserData={false}
                  />
                )
              }
            })}
          </Box>
        )}
      </Box>
      {!userData ? (
        <p>Loading data...</p>
      ) : (
        <UserInfos
          userAllPoints={userData.userTotalScore.userTotalScore}
          userName={userData.userName}
          isUserData={true}
        />
      )}
    </Box>
  )
}
export default Ranking
