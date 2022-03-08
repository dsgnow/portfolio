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
import { Link, useNavigate } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NaviStickyButton from "../../UI/Button/NaviStickyButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  overflow: hidden;
  @media(orientation: landscape) {
    justify-content: flex-end;
  }
`

const StyledNaviButton = styled(NaviButton)`
  @media (min-width: 900px) {
    flex-basis: 40%;
  }
`

const WrapNavi = styled.div`
  display: flex;
  flex-direction: row;
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
  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 100px 70px;
  background-size: 100% 100%;
  gap: 30px;
  width: 100%;
  transform: scale(0.9);
  animation: show 3s both 0.5s;
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
  bottom: 0;
  display: none;
  animation: fadeIn 1s both;
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
  @keyframes fadeIn {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  animation: fadeIn 1s both;
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

const WrapTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  animation: showTechnology 1s both;
  display: none;
  @media (orientation: landscape) and (min-width: 1000px) {
    display: block;
  }
`

const Title = styled(Typography)`
  color: white;
  animation: show 3s both 1s;
  span.primary {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

function Navigation(props) {
  const { speed } = props
  const [themeSpeed, setThemeSpeed] = useState(speed)

  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <NaviStickyButton onClick={() => navigate(-1)} route="" title="Exit"></NaviStickyButton>
        <WrapTitle>
          <Title variant="h2">Navigation </Title>
        </WrapTitle>
        <WrapNavi>
          <WrapConsole>
            <ShipDisplay style={{ backgroundImage: `url(${frame}) ` }}>
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="Skills"
                component={Link}
                to="/skills">
              </StyledNaviButton>
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="Projects"
                component={Link}
                to="/projects">>
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
              <StyledNaviButton
                color="default"
                variant="outlined"
                title="Start"
                component={Link}
                to="/welcome">
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
