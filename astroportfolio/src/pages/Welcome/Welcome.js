import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useState, useEffect } from 'react'
import StarTheme from '../../components/StarTheme/StarTheme'
import Box from '@mui/material/Box'
import circle from '../../Assets/Images/circle.png'
import astronaut from '../../Assets/Images/astronaut.png'
import planet from '../../Assets/Images/planet1.png'

const StyledTitleTypography = styled(Typography)`
  margin: unset !important;
  font-weight: bold;
  white-space: nowrap;
  font-size: 3rem;
  // color: ${(inSpace) => (inSpace ? 'white' : 'black')};
  @media (orientation: landscape) {
    font-size: 2rem;
  }
  ${({ theme }) => `
   ${theme.breakpoints.up('sm')} {
    margin: 60px 0;
    ${theme.breakpoints.up('lg')} {
    font-size: 5rem;
   `}
`

const StyledTypography = styled(Typography)``

const StyledStarTheme = styled.div`
  left: 0;
  top: 0;
  z-index: -1;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  min-width: 320px;
  min-height: 500px;
  background-color: transparent;
  @media (orientation: landscape) {
    display: flex;
    flex-direction: row;
    min-width: 500px;
    min-height: 320px;
  }
`

const WrapTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  @keyframes changeOpacity {
    100% {
      opacity: 100%;
    }
  }
`

const Astronaut = styled.div`
  flex-basis: 50%;
  position: relative;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 151vw;
  height: 151vw;
  border-radius: 50%;
  max-height: 100vh;
  @media (orientation: landscape) {
    top: 50%;
    max-width: 45vw;
    max-height: 45vw;
    transform: translate(-120%, -50%);
  }
`

const CircleImg = styled.img`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 152vw;
  height: 152vw;
  position: absolute;
  z-index: 3;
  opacity: 100%;
  @media (orientation: landscape) {
    max-width: 45vw;
    max-height: 45vw;
  }
`

const AstronautImg = styled.img`
  width: 60vw;
  height: 60vw;
  position: absolute;
  top: 50%;
  right: 45%;
  transform: translate(50%, -75%);
  z-index: 2;
  @keyframes astronautHeader {
    100% {
      transform: translate(45%, -70%);
    }
  }
  animation: astronautHeader 3s ease-in-out infinite;
  animation-direction: alternate-reverse;
  @media (orientation: landscape) {
    transform: translate(50%, -45%);
    @keyframes astronautHeader {
      100% {
        transform: translate(45%, -40%);
      }
    }
    width: 20vw;
    height: 20vw;
  }
`

const PlanetImg = styled.img`
  width: 25vw;
  height: 25vw;
  position: absolute;
  top: 20%;
  right: 60%;
  transform: translate(50%, -40%);
  z-index: 1;
  @media (orientation: landscape) {
    width: 10vw;
    height: 10vw;
  }
`

const StyledButton = styled(Button)`
  border-radius: 50px;
  margin-top: 20px;
  color: black;
  letter-spacing: 2px;
  transition: 0.5s;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0;
  animation: changeOpacity 1s ease-in-out 1 forwards;
  animation-delay: 1.7s;
  &:hover {
    border-width: 2px;
    color: white !important;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

const Welcome = (props) => {
  const { speed } = props
  const [themeSpeed, setThemeSpeed] = useState(speed)
  const [inSpace, setInSpace] = useState(false)
  const [time, setTime] = useState({
    months: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })

  const changeTheme = () => {
    setInSpace(!inSpace)
  }

  useEffect(() => {
    const calcTime = () => {
      const endTime = new Date('2020-04-01 12:34:00').getTime()
      const nowTime = new Date().getTime()

      const months = Math.floor(
        nowTime / (1000 * 60 * 60 * 24 * 30.5) -
          endTime / (1000 * 60 * 60 * 24 * 30.5)
      )

      const days = Math.floor(
        (nowTime / (1000 * 60 * 60 * 24) - endTime / (1000 * 60 * 60 * 24)) %
          30.5
      )

      let hours = Math.floor(
        (nowTime / (1000 * 60 * 60) - endTime / (1000 * 60 * 60)) % 24
      )
      hours = Math.abs(hours) < 10 ? `0${hours}` : hours

      const minutes = Math.floor(
        (nowTime / (1000 * 60) - endTime / (1000 * 60)) % 60
      )

      let secs = Math.floor((nowTime / 1000 - endTime / 1000) % 60)
      secs = Math.abs(secs) < 10 ? `0${secs}` : secs

      setTime({
        months: Math.abs(months) + ' ms.',
        days: Math.abs(days) + ' d.',
        hours: Math.abs(hours) + ' h.',
        minutes: Math.abs(minutes) + ' m.',
        seconds: Math.abs(secs) + ' s.'
      })
    }
    calcTime()
    const timeInterval = setInterval(() => calcTime(), 1000)
    return () => {
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <>
      <Wrapper>
        {inSpace && (
          <StyledStarTheme style={{ position: 'absolute' }}>
            <StarTheme key={themeSpeed} speed={themeSpeed}></StarTheme>
          </StyledStarTheme>
        )}
        <WrapTexts>
          <Box sx={{ mt: 4 }}>
            <StyledTypography
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDelay: '1.7s'
              }}
              variant="subtitle2">
              mission duration:
            </StyledTypography>
            <StyledTypography
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDelay: '1.7s'
              }}
              variant="subtitle1">
              {`${time.months} ${time.days} ${time.hours} ${time.minutes} ${time.seconds}`}
            </StyledTypography>
          </Box>
          <Box sx={{ m: 2 }}>
            <StyledTitleTypography
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDirection: 'forwards'
              }}
              variant="h1">
              MY JOURNEY
            </StyledTitleTypography>
            <StyledTypography
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDelay: '0.5s'
              }}
              variant="h5">
              to become front end developer
            </StyledTypography>
            <StyledButton
              color="primary"
              variant="outlined"
              onClick={changeTheme}
              style={inSpace ? { color: 'white' } : { color: 'black' }}>
              NAVIGATE
            </StyledButton>
          </Box>
        </WrapTexts>
        <Astronaut
          style={
            inSpace
              ? { backgroundColor: 'transparent' }
              : { backgroundColor: 'black' }
          }>
          <Box sx={{ m: 2 }}>
            {!inSpace && <CircleImg src={circle} alt="circle" />}
            <AstronautImg src={astronaut} alt="astronaut" />
            <PlanetImg src={planet} alt="planet" />
          </Box>
          {!inSpace && (
            <StyledStarTheme>
              <StarTheme key={themeSpeed} speed={themeSpeed}></StarTheme>
            </StyledStarTheme>
          )}
        </Astronaut>
      </Wrapper>
    </>
  )
}

export default Welcome
