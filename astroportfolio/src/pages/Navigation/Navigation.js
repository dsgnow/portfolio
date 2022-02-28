import { useState, useEffect } from "react";
import StarTheme from '../../components/StarTheme/StarTheme'
import Box from "@mui/material/Box";
import monitor from "../../Assets/Images/monitor.svg";
import console from "../../Assets/Images/console.svg";
import cocpit from "../../Assets/Images/cocpit.svg";
import chair from "../../Assets/Images/chair.svg";
import frame from "../../Assets/Images/frame.svg";
import styled from "styled-components";
import Button from '../../UI/Button/Button'
import NaviButton from '../../UI/Button/NaviButton'
import { useNavigate } from "react-router-dom";

const StyledStarTheme = styled.div`
  left: 0;
  top: 0;
  z-index: -1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  @media(orientation: landscape) {
    justify-content: flex-end;
  }
`

const WrapTexts = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
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
  @media (min-width: 700px) {
    flex-basis: 40%;
  }
`

const WrapNavi = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 80%;
  justify-content: center;
  align-items: flex-end;
  @media (orientation: landscape) {
    flex-basis: 70%;
    align-items: stretch;
  }
`

const WrapConsole = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-width: 2px;
  width: 100%;
`

const ShipDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  //border-style: solid;
  //border-width: 2px;
  //border-color: #6b1600;
  //border-radius: 2px;
  padding: 100px;
  background-size: 100% 100%;
  gap: 30px;
  width: 100%;
  transform: scale(0.9);
  @media (min-height: 800px) {
    gap: 50px;
  }
  @media (orientation: landscape) {
    flex-direction: row;
    padding: 50px 100px;
    margin: 20px 50px;
    gap: 40px;
  }
  @media (orientation: landscape) and (min-width: 950px) {
    transform: scale(0.9);
    max-width: 900px;
    gap: 80px;
    padding: 150px;
  }
`

const ConsoleImg = styled.img`
  width: 90%;
  display: none;
  @media (min-height: 700px) {
    display: block;
  }
  @media (max-height: 1100px) {
    width: 60%;
  }
  @media (orientation: landscape) {
    display: none;
  }
`

const Cocpit = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  @media (min-height: 900px) and (orientation: landscape) {
    height: 300px;
  }
`

const CocpitImg = styled.img`
  width: 100%;
  display: none;
  position: absolute;
  bottom: 0;
  @media (min-height: 900px) and (orientation: landscape) {
    display: block;
  }
`

const ChairLeftImg = styled.img`
  height: 100%;
  display: none;
  z-index: 1;
  @media (min-height: 900px) and (orientation: landscape) {
    display: block;
  }
`

const ConsoleCenterImg = styled.img`
  height: 100%;
  display: none;
  z-index: 1;
  @media (min-height: 900px) and (orientation: landscape) {
    display: block;
  }
`

const ChairRightImg = styled.img`
  height: 100%;
  display: none;
  z-index: 1;
  transform: scale(-1, 1);
  @media (min-height: 900px) and (orientation: landscape) {
    display: block;
  }
`

function Navigation(props) {
  const { speed } = props
  const [themeSpeed, setThemeSpeed] = useState(speed)

  const navigate = useNavigate();

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
              title="ABORT NAVI"
              onClick={() => navigate(-1)}>
            </StyledButton>
          </Box>
        </WrapTexts>
        <WrapNavi>
          <WrapConsole>
            <ShipDisplay style={{ backgroundImage: `url(${frame}) ` }}>
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
            <Cocpit>
              <CocpitImg src={cocpit} alt="cocpit" />
              <ChairLeftImg src={chair} alt="chair" />
              <ConsoleCenterImg src={console} alt="console" />
              <ChairRightImg src={chair} alt="chair" />
            </Cocpit>
          </WrapConsole>
        </WrapNavi>
      </Wrapper>
    </>
  )
}

export default Navigation
