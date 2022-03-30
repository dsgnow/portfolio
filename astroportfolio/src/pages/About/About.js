import React from "react";
import piotr from "../../Assets/Images/piotr.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import NaviStickyButton from "../../UI/Button/NaviStickyButton";
import spaceCorner from "../../Assets/Images/aboutTop.png";
import NaviButton from "../../UI/Button/NaviButton";
import { Button } from '@material-ui/core'
import grey1Right from "../../Assets/Images/grey1Right.svg";
import grey2Right from "../../Assets/Images/grey2Right.svg";
import grey3Right from "../../Assets/Images/grey3Right.svg";
import grey4Right from "../../Assets/Images/grey4Right.svg";

const Background = styled.div`
  background-color: white;
  @media(orientation: landscape) and (min-width: 1000px){
    background-color: white;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: flex-start;
  @media(orientation: portrait) and (min-height: 500px){
    padding: 0 30px;
  }
  @media(orientation: landscape) {
    justify-content: center;
  }
  @media(orientation: landscape) and (min-width: 1000px){
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    height: 100vh;
    overflow: hidden;
  }
`

const WrapImage = styled.div`
  height: 25%;
  position: relative;
  @media(orientation: landscape){
    height: unset;
  }
`

const WrapTexts = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: showTechnology 1s both;
  @media(orientation: landscape){
    height: 90%;
    align-items: center;
    justify-content: center;
  }
  @media(orientation: landscape) and (min-width: 1000px){
    height: 90%;
    width: 70%;
    align-items: flex-start;
  }
  @media(orientation: landscape) and (min-width: 1500px){
    width: 50%;
  }
  @media(orientation: landscape) and (min-width: 2200px){
    margin-left: 150px;
  }
`

const CornerImg = styled.img`
  height: 30%;
  z-index: 1;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  @media(orientation: landscape) and (min-width: 1000px){
    z-index: -1;
    height: 50%;
  }
  @media(orientation: landscape) and (min-width: 1500px){
    height: 75%;
  }
`

const PiotrImg = styled.img`
  animation: show 2s both;
  z-index: 1;
  width: 80%;
  @media(orientation: portrait) and (min-height: 500px){
    width: unset;
    max-width: 100%;
  }
  @media(orientation: landscape){
    width: unset;
    max-height: 30%;
  }
  @media(orientation: landscape)  and (min-height: 500px){
    width: unset;
    max-height: 20%;
  }
  @media(orientation: landscape) and (min-width: 1000px){
    max-height: 30%;
  }
  @media(orientation: landscape) and (min-width: 1500px){
    max-height: 40%;
  }
`

const Description = styled(Typography)`
  animation: show 2s both 0.5s;
  max-height: 250px;
  overflow: auto;
  margin: 20px 0;
  text-align: left;
  @media (min-height: 700px) {
    max-height: 250px;
  }
  @media (min-height: 800px) {
    max-height: unset;
    overflow: unset;
  }
  @media (orientation: landscape) {
    margin: 20px;
  }
  @media (orientation: landscape) and (min-height: 800px) {
    max-height: unset;
    overflow: unset;
    margin: 20px 50px;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    max-height: unset;
    overflow: unset;
    margin-top: 50px;
  }
`

const ContactButton = styled(Button)`
  animation: show 2s both 0.5s;
  border: 2px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  background-color: white;
  color: #0e0f15;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    color: white;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  @media (orientation: landscape) {
    margin: 20px 50px;
  }
`

const CloudsImg = styled.img`
    //@keyframes greyCloudsStaticRight {
    //  0% {
    //    opacity: 0;
    //    transform: translate(0, 0);
    //  }
    //
    //
    //  60% {
    //    opacity: .9;
    //    transform: translate(-3%, 1%);
    //  }
    //
    //  100% {
    //    opacity: 0;
    //    transform: translate(-2%, 0);
    //  }
    //}
    &.grey1Right {
      animation: greyCloudsStaticRight 4s infinite;
    }
    &.grey2Right {
      animation: greyCloudsStaticRight 7s infinite;
    }
    &.grey3Right {
      animation: greyCloudsStaticRight 10s infinite;
    }
    &.grey4Right {
      animation: greyCloudsStaticRight 13s infinite;
    }
  z-index: -2;
  display: none;
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const About = () => {
  return (
  <>
    <NaviStickyButton className="onWhite" route="/navigation" title="Navi"></NaviStickyButton>
    <Background>
      <CornerImg src={spaceCorner} alt="space with planet"></CornerImg>
      <CloudsImg className={"grey1Right"} src={grey1Right} alt="clouds"/>
      <CloudsImg className={"grey2Right"} src={grey2Right} alt="clouds"/>
      <CloudsImg className={"grey3Right"} src={grey3Right} alt="clouds"/>
      <CloudsImg className={"grey4Right"} src={grey4Right} alt="clouds"/>
      <Wrapper>
        <WrapImage>
        </WrapImage>
        <WrapTexts>
          <PiotrImg src={piotr} alt="invitation title"></PiotrImg>
          <Description variants="description">
            Hello, my name is Piotr and I am glad that you are interested in my portfolio. I am a graphic designer by education, but I also develop as a frontend programmer. In my projects, I try to use the latest technologies and develop in new areas. If you like my projects, please contact me.
          </Description>
          <ContactButton
            component={Link}
            title="Contact"
            to="/contact">
            Contact
          </ContactButton>
        </WrapTexts>
      </Wrapper>
    </Background>
  </>
  );
};

export default About;