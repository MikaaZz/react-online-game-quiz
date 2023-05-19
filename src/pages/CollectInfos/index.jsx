import { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { User } from '../../firebase'
import { Link } from 'react-router-dom'
import { backgroundImage, backgroundShape } from '../../assets/images'

function CollectInfos() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [role, setRole] = useState('')
  const [city, setCity] = useState('')

  const [nameError, setNameError] = useState('')
  const [positionError, setPositionError] = useState('')
  const [roleError, setRoleError] = useState('')

  const [cityError, setCityError] = useState('')

  const [sumbitSent, setSumbitSent] = useState(false)

  const user = new User

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handlePositionChange(event) {
    setPosition(event.target.value)
  }

  function handleRoleChange(event) {
    setRole(event.target.value)
  }
  function handleCityChange(event) {
    setCity(event.target.value)
  }

  function validateName() {
    const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    regex.test(name)
      ? setNameError('')
      : setNameError('Nome inválido, não utilize números ou sinais!')
  }

  function validatePosition() {
    if (position.length < 2) {
      setPositionError('Sua área de atuação deve ter no mínimo 2 letras')
      return
    }
    setPositionError('')
  }

  function validateRole() {
    if (role.length < 3) {
      setRoleError('Seu cargo deve ter no mínimo 3 letras')
      return
    }
    setRoleError('')
  }

  function validateCity() {
    if (role.length < 3) {
      setCityError('Selecione sua cidade')
      return
    }
    setCityError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (name && role && position && city) {
      user.writeUserInitialInfos(city, name, role, position)
      setSumbitSent(true)
    }
  }

  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
      }}>
      <img
        src={backgroundShape}
        style={{
          height: '600px',
          position: 'absolute',
          top: '0px',
          width: '100%',
        }}
      />
      <Box
        autoComplete='off'
        component={'form'}
        sx={{
          alignItems: 'center',
          backgroundColor: 'rgba(12, 12, 12, 0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
          minHeight: '600px',
          padding: 4,
          position: 'relative',
          width: { xs: '95vw', lg: '80vw' },
        }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            width: '100%',
          }}>
          <Typography
            component={'h2'}
            sx={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontFamily: 'Poppins',
              textAlign: { xs: 'center'},
            }}>
            Hey, before you start, fill in the fields below 😄
          </Typography>
          <TextField
            sx={{
              width: '80%',
              label: { color: '#fff' },
              fieldset: { border: '1px solid #ffffffca' },
            }}
            id='name_input'
            label='Name:'
            value={name}
            onChange={handleNameChange}
            onBlur={validateName}
            error={!!nameError}
            helperText={nameError}
            variant='outlined'
          />
          <TextField
            sx={{
              width: '80%',
              label: { color: '#fff' },
              fieldset: { border: '1px solid #ffffffca' },
            }}
            id='position_input'
            label='Position:'
            value={position}
            onChange={handlePositionChange}
            onBlur={validatePosition}
            error={!!positionError}
            helperText={positionError}
            variant='outlined'
          />
          <TextField
            sx={{
              width: '80%',
              label: { color: '#fff' },
              fieldset: { border: '1px solid #ffffffca' },
            }}
            id='role_input'
            label='Role:'
            value={role}
            onChange={handleRoleChange}
            onBlur={validateRole}
            error={!!roleError}
            helperText={roleError}
            variant='outlined'
          />
          <TextField
            sx={{
              width: '80%',
              label: { color: '#fff' },
              fieldset: { border: '1px solid #ffffffca' },
            }}
            id='role_input'
            label='City:'
            value={city}
            onChange={handleCityChange}
            onBlur={validateCity}
            error={!!cityError}
            helperText={cityError}
            variant='outlined'
          />
        </Box>
        {sumbitSent ? (
          <Link
            to={'/mapa'}
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 2,
              width: '100%',
            }}>
            <button
              style={{
                backgroundColor: '#99DA21',
                bottom: '-1rem',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                color: '#006C1A',
                fontSize: '20px',
                fontWeight: 'bold',
                maxWidth: '320px',
                padding: '16px 48px',
                position: 'absolute',
                textAlign: 'center',
                width: '100%',
              }}>
              Seguir em frente
            </button>
          </Link>
        ) : (
          <button
            onClick={(e) => {
              handleSubmit(e)
            }}
            className='main-button'>
            Confirmar
          </button>
        )}
      </Box>
    </Box>
  )
}
export default CollectInfos
