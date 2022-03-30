import styled from 'styled-components'
import Button from '../../UI/Button/Button'
import Typography from '@material-ui/core/Typography'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import circle from '../../Assets/Images/circle.png'
import astronaut from '../../Assets/Images/astronaut.png'
import planet from '../../Assets/Images/planet1.png'
import { Link } from 'react-router-dom';

const StyledTitleTypography = styled(Typography)`
  margin: unset !important;
  font-weight: bold;
  white-space: nowrap;
  &.white {
    color: white !important;
  }
  @media (orientation: landscape) and (max-width: 700px) {
   font-size: 2rem;
  }
  ${({ theme }) => `s
   ${theme.breakpoints.up('sm')} {
    margin: 60px 0;
    ${theme.breakpoints.up('lg')} {
    font-size: 5rem;
   `}
`

const StyledTypography = styled(Typography)`
  &.white {
    color: white !important;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  min-width: 320px;
  min-height: 500px;
  background-color: transparent;
  justify-content: center;
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
  @media (orientation: landscape) {
    flex-basis: auto;
  }
`

const WrapAstronaut = styled.div`
  flex-basis: 50%;
  overflow: hidden;
  @media (orientation: landscape) {
    flex-basis: 40%;
  }
  @media (orientation: landscape) and (min-width: 1700px) {
    flex-basis: 50%;
  }
`

const Astronaut = styled.div`
  position: relative;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  overflow: hidden;
  width: 151vw;
  height: 151vw;
  border-radius: 50%;
  max-height: 100vh;
  @media (orientation: landscape) {
    //top: 50%;
    //max-width: 45vw;
    //max-height: 45vw;
    //transform: translate(-120%, -50%);
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 45vw;
    max-height: 45vw;
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
  opacity: 0;
  animation: changeOpacity 1s ease-in-out 1 forwards;
  animation-delay: 1.7s;
`

const Welcome = () => {
  const [inSpace] = useState(true)
  const [time, setTime] = useState({
    months: '',
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })

  useEffect(() => {
    const calcTime = () => {
      const endTime = new Date('2020/04/01').getTime()
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
        <WrapTexts>
          <Box sx={{ mt: 4 }}>
            <StyledTypography
              className={inSpace ? 'white' : '#0e0f15'}
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDelay: '1.7s'
              }}
              variant="subtitle2">
              mission duration:
            </StyledTypography>
            <StyledTypography
              className={inSpace ? 'white' : '#0e0f15'}
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
              className={inSpace ? 'white' : '#0e0f15'}
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDirection: 'forwards'
              }}
              variant="h1">
              MY JOURNEY
            </StyledTitleTypography>
            <StyledTypography
              className={inSpace ? 'white' : '#0e0f15'}
              style={{
                opacity: 0,
                animation: 'changeOpacity 1s ease-in-out 1 forwards',
                animationDelay: '0.5s'
              }}
              variant="h5">
              to become front end developer
            </StyledTypography>
            <StyledButton
              size="large"
              color="primary"
              variant="outlined"
              component={Link}
              to="/navigation"
              style={{ color: 'white', animationDelay: '1.7s' }}
              title="NAVIGATE">
            </StyledButton>
          </Box>
        </WrapTexts>
        <WrapAstronaut>
          <Astronaut
            style={
              inSpace
                ? { backgroundColor: 'transparent' }
                : { backgroundColor: '#0e0f15' }
            }>
              {!inSpace && <CircleImg src={circle} alt="circle" />}
              <AstronautImg src={astronaut} alt="astronaut" />
              <PlanetImg src={planet} alt="planet" />
          </Astronaut>
        </WrapAstronaut>
      </Wrapper>
    </>
  )
}

export default Welcome
