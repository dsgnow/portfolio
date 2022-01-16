import { useState, useEffect } from 'react'
import StarTheme from '../../components/StarTheme/StarTheme'
import Box from "@mui/material/Box";
import monitor from "../../Assets/Images/monitor.svg";
import console from "../../Assets/Images/console.svg";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from '../../UI/Button/Button'

const StyledTitleTypography = styled(Typography)`
  margin: unset !important;
  font-weight: bold;
  white-space: nowrap;
  font-size: 3rem;
  &.white {
    color: white !important;
  }
  @media (orientation: landscape) {
    font-size: 2rem;
  }
  ${({ theme }) => `s
   ${theme.breakpoints.up('sm')} {
    margin: 60px 0;
    ${theme.breakpoints.up('lg')} {
    font-size: 5rem;
   `}
`

const StyledStarTheme = styled.div`
  left: 0;
  top: 0;
  z-index: -1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: -webkit-fill-available;
  justify-content: center;
  overflow: hidden;
`

const WrapTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  @keyframes changeOpacity {
    100% {
      opacity: 100%;
    }
  }
`

const StyledButton = styled(Button)`
  color: white;
  animation-delay: 0s;
`

const NaviButton = styled(Button)`
  color: white;
  animation-delay: 0s;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`

const WrapNavi = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 80%;
  justify-content: center;
  align-items: flex-end;
`

const WrapConsole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MonitorImg = styled.img`
  width: 90vw;
  position: relative;
`

const ConsoleImg = styled.img`
  width: 90vw;
`

function Navigation(props) {
  const { speed } = props
  const [themeSpeed, setThemeSpeed] = useState(speed)

  return (
    <>
      <StyledStarTheme style={{ position: 'absolute' }}>
        <StarTheme key={themeSpeed} speed={0.25}></StarTheme>
      </StyledStarTheme>
      <Wrapper>
        <WrapTexts>
          <Box sx={{ m: 2 }}>
            <StyledButton
              color="default"
              variant="outlined"
              title="ABORT NAVI">
            </StyledButton>
          </Box>
        </WrapTexts>
        <WrapNavi>
          <WrapConsole>
             <NaviButton
               color="default"
               variant="outlined"
               title="Projects">
            </NaviButton>
            <MonitorImg src={monitor} alt="monitor" />
            <ConsoleImg src={console} alt="console" />
          </WrapConsole>
        </WrapNavi>
      </Wrapper>
    </>
  )
}

export default Navigation
