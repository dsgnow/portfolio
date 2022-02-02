import { useState, useEffect } from 'react'
import StarTheme from '../../components/StarTheme/StarTheme'
import Box from "@mui/material/Box";
import monitor from "../../Assets/Images/monitor.svg";
import console from "../../Assets/Images/console.svg";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from '../../UI/Button/Button'
import NaviButton from '../../UI/Button/NaviButton'

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

const StyledNaviButton = styled(NaviButton)`
  
`

const WrapNavi = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 80%;
  justify-content: center;
  align-items: flex-end;
  @media (orientation: landscape) {
    flex-basis: 50%;
  }
`

const WrapConsole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-width: 2px;
`

const ShipDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-style: solid;
  border-width: 2px;
  border-color: #6b1600;
  border-radius: 2px;
  padding: 50px;
  margin: 20px 50px;
  gap: 30px;
  background-color: rgba(40, 40, 40, 0.48);
  width: 90vw;
  @media (min-height: 800px) {
    gap: 50px;
  }
  @media (orientation: landscape) {
    flex-direction: row;
    padding: 30px;
    margin: 20px 50px;
    gap: 40px;
  }
`

const ConsoleImg = styled.img`
  width: 90vw;
  display: none;
  @media (min-height: 700px) {
    display: block;
  }
  @media (orientation: landscape) {
    display: none;
  }
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
            <ShipDisplay>
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="Skills">
              </StyledNaviButton>
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="Projects">
              </StyledNaviButton>
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="About">
              </StyledNaviButton>
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="Contact">
              </StyledNaviButton>
            </ShipDisplay>
            <ConsoleImg src={console} alt="console" />
          </WrapConsole>
        </WrapNavi>
      </Wrapper>
    </>
  )
}

export default Navigation
