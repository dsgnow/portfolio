import React, { useState } from "react";
import NaviStickyButton from '../../UI/Button/NaviStickyButton'
import styled from "styled-components";
import mockHair from "../../Assets/Images/mockHair.png";
import trainer from "../../Assets/Images/trainer.png";
import prepress from "../../Assets/Images/prepress.png";
import volley from "../../Assets/Images/volley.png";
import print from "../../Assets/Images/print.png";
import spaceCorner from "../../Assets/Images/corner.svg";
import dietitian from "../../Assets/Images/dietitian.png";
import grey1Left from "../../Assets/Images/grey1Left.svg";
import grey2Left from "../../Assets/Images/grey2Left.svg";
import grey3Left from "../../Assets/Images/grey3Left.svg";
import grey4Left from "../../Assets/Images/grey4Left.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: center;
  align-items: flex-start;
  @media(orientation: landscape) {
    justify-content: space-around;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    justify-content: center;
    align-items: center;
    gap: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const Mock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
  height: 30%;
  min-height: 200px;
  position: relative;
  @media(min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: unset;
  }
  @media(orientation: landscape) {
    flex-direction: row;
    display: none;
  }
  @media(orientation: landscape) and (min-height: 500px) {
    display: flex;
    justify-content: center;
    margin-bottom: unset;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    align-items: center;
    padding-left: 30px;
  }
`

const MockImg = styled.img`
  height: 80%;
  z-index: 1;
  animation: show 2s both 0.3s;
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    height: unset;
    width: 40%;
  }
`

const CornerImg = styled.img`
  height: 50%;
  z-index: -1;
  display: none;
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

const Header = styled(Typography)`
  padding: unset;
  margin-bottom: -20px;
  font-size: calc((75vw - 4.5rem) / 4);
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.main};
  animation: show 2s both;
  @media(min-width: 600px) {
    font-size: 3rem;
  }
  @media(orientation: landscape) {
    display: none;
  }
  @media(orientation: landscape) and (min-height: 500px) {
    display: block;
    font-size: calc((75vw - 4.5rem) / 6);
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    font-size: 6rem;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1400px){
    font-size: 10rem;
  }
`

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 40px;
  padding-right: 30px;
  @media(orientation: landscape) {
    padding-top: 20px;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    width: 70%;
    order: 0;
  }
`
const WrapTitle = styled.div`
  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const Title = styled(Typography)`
  color: #0e0f15;
  &.primary {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const Description = styled(Typography)`
  max-height: 200px;
  overflow: auto;
  text-align: left;
  @media (min-height: 700px) {
    max-height: 250px;
  }
  @media (min-height: 800px) {
    max-height: 300px;
  }
  @media (orientation: landscape) {
    max-height: 150px;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    max-height: unset;
  }
`

const WrapButtons = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 20px;

  .Mui-disabled {
    background-color: #efefef;

    a {
      color: grey;
      text-decoration: line-through;
    }
  }
`

const LinkButton = styled(Button)`
  border-radius: 15px;
  padding: 5px 10px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  text-transform: lowercase;
  font-size: 1rem;
  font-weight: bold;
  & a {
    color: #0e0f15;
    text-decoration: none;
  }
`

const WrapSlider = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  justify-content: space-around;
  align-items: center;
  margin-top: auto;
  padding: 20px 10px 20px 0;
  width: 100%;
  display: flex;
  @media(orientation: landscape) {
    padding: 5px;
    margin-top: unset;
  }
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    background-color: unset;
    color: ${({ theme }) => theme.palette.primary.main};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    padding-left: 50px;
    width: 70%;
    transition: 0.3s;
    & p {
      color: #0e0f15;
    }
    & .arrow {
      cursor: pointer;
      transition: 0.3s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`

const ProjectIndex = styled(Typography)`
  color: white;
  font-weight: bold;
`

const Background = styled.div`
  background-color: white;
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const CloudsImg = styled.img`
    //@keyframes greyCloudsStaticLeft {
    //  0% {
    //    opacity: 0;
    //    transform: translate(0, 0);
    //  }
    //
    //
    //  60% {
    //    opacity: .9;changeStarSpeed
    //    transform: translate(-3%, 1%);
    //  }
    //
    //  100% {
    //    opacity: 0;
    //    transform: translate(-2%, 0);
    //  }
    //}
    &.grey1Left {
      animation: greyCloudsStaticLeft 4s infinite;
    }
    &.grey2Left {
      animation: greyCloudsStaticLeft 7s infinite;
    }
    &.grey3Left {
      animation: greyCloudsStaticLeft 10s infinite;
    }
    &.grey4Left {
      animation: greyCloudsStaticLeft 13s infinite;
    }
  z-index: -1;
  display: none;
  @media(orientation: landscape) and (min-height: 500px) and (min-width: 1000px){
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imgsFullyLoaded, setImgsFullyLoaded] = useState(false);
  const [numberOfPreloadedImgs, setNumberOfPreloadedImgs] = useState(0);
  const imagesNumber = 6;

  const setIndex = (add) => {
    const maxIndex = projects.length
    if (add && projectIndex + 1 == maxIndex) {
      setProjectIndex(0)
    } else {
      setProjectIndex(projectIndex + 1)
    }

    if (!add) {
      if (projectIndex - 1 < 0) {
        setProjectIndex(0)
      } else {
        setProjectIndex(projectIndex - 1)
      }
    }
  }

  const checkLoadingImg = () => {
    setNumberOfPreloadedImgs(numberOfPreloadedImgs + 1)
    if (numberOfPreloadedImgs + 1 === imagesNumber) {
      setImgsFullyLoaded(true);
    }
  }

  const projects = [
    {
      image: volley,
      header: 'VOLLEY',
      title1: 'volley',
      title2: 'ball',
      description: 'Application for signing up for volleyball matches with automatic selection of squads based on the level of players. Technologies used: React, Firebase, Styled Components. Login: test@wp.pl, Password: tojesthaslo.',
      git: true,
      githubLink: 'https://github.com/dsgnow/volleyReact',
      live: true,
      liveLink: 'https://hopeful-mccarthy-f4d9aa.netlify.app/',
    },
    {
      image: mockHair,
      header: 'BARBER',
      title1: 'barber',
      title2: 'shop',
      description: 'Commercial landingpage project created for the barber shop. Technologies used javascript, css, html. Additionally, I used BEM methodologies in CSS styling. The website design was created and adapted to the client\'s requirements.',
      git: true,
      githubLink: 'https://github.com/dsgnow/barberShop',
      live: true,
      liveLink: 'https://kuzniadzentelmenow.pl/',
    },
    {
      image: trainer,
      header: 'TRAINER',
      title1: 'personal',
      title2: 'trainer',
      description: 'A project that I started to learn the BEM methodology. Technologies used are javascript, css and html. The website was designed as a showcase for a personal trainer.',
      git: true,
      githubLink: 'https://github.com/dsgnow/gym',
      live: true,
      liveLink: 'https://dsgnow.github.io/gym/',
    },
    {
      image: prepress,
      header: 'PREPRESS',
      title1: 'prepress',
      title2: '_2019',
      description: 'The extension was created to automate and speed up the work in the printing house. It allows you to easily mark the eyelets on the graphic or weld, add different finishing for each edge of the document individually and automatically save the file to the flattened tiff file format. Thanks to the built-in options you can decide whether the action should be performed for all the open files in Photoshop or only for one of them.',
      git: false,
      githubLink: '',
      live: true,
      liveLink: 'https://exchange.adobe.com/creativecloud.details.101378.prepress2019.html',
    },
    {
      image: dietitian,
      header: 'HEALTH',
      title1: 'dietitian',
      title2: '',
      description: 'Commercial landingpage project created for the barber shop. Technologies used javascript, css, html. Additionally, I used BEM methodologies in CSS styling. The website design was created and adapted to the client\'s requirements.',
      git: true,
      githubLink: 'https://github.com/dsgnow/dietitian',
      live: true,
      liveLink: 'https://dsgnow.github.io/dietitian/',
    },
    {
      image: print,
      header: 'PRINT',
      title1: 'print',
      title2: 'project',
      description: 'The project from which I started my adventure with programming. Developed since 2019, it was implemented in a large-format printing house. Thanks to it, you can place new orders, automatically send confirmations to customers and check efficiency on machines. You can print pdf orders in the app and use the scanner system to quickly record events.',
      git: false,
      githubLink: '',
      live: false,
      liveLink: '',
    }
  ]
  return (
    <>
      <NaviStickyButton className="onWhite" route="/navigation" title="Navi"/>
        <Background>
          <CornerImg
            style={imgsFullyLoaded ? {} : {display: 'none'}}
            onLoad={() => checkLoadingImg()}
            src={spaceCorner}
            alt="space with planet"/>
          <CloudsImg
            style={imgsFullyLoaded ? {} : {display: 'none'}}
            onLoad={() => checkLoadingImg()}
            className={"grey1Left"}
            src={grey1Left}
            alt="clouds"/>
          <CloudsImg
            style={imgsFullyLoaded ? {} : {display: 'none'}}
            onLoad={() => checkLoadingImg()}
            className={"grey2Left"}
            src={grey2Left}
            alt="clouds"/>
          <CloudsImg
            style={imgsFullyLoaded ? {} : {display: 'none'}}
            onLoad={() => checkLoadingImg()}
            className={"grey3Left"}
            src={grey3Left}
            alt="clouds"/>
          <CloudsImg
            style={imgsFullyLoaded ? {} : {display: 'none'}}
            onLoad={() => checkLoadingImg()}
            className={"grey4Left"}
            src={grey4Left}
            alt="clouds"/>
          <Wrapper key={projectIndex}>
          <Mock>
            <Header>{projects[projectIndex].header}</Header>
            <MockImg
              style={imgsFullyLoaded ? {} : {display: 'none'}}
              onLoad={() => checkLoadingImg()}
              src={projects[projectIndex].image}
              alt="project presentation" />
          </Mock>
          <Project>
            <WrapTitle>
              <Title variant="h2">{projects[projectIndex].title1} </Title>
              <Title className={"primary"} variant="h2">{projects[projectIndex].title2} </Title>
            </WrapTitle>
            <Description variants="description">
              {projects[projectIndex].description}
            </Description>
            <WrapButtons>
              <LinkButton disabled={!projects[projectIndex].git}>
                <a href={projects[projectIndex].githubLink} target="_blank"  rel="noreferrer"> github </a>
              </LinkButton>
              <LinkButton disabled={!projects[projectIndex].live}>
                <a href={projects[projectIndex].liveLink} target="_blank"  rel="noreferrer"> live </a>
              </LinkButton>
            </WrapButtons>
          </Project>
          <WrapSlider>
            <FontAwesomeIcon className="arrow" onClick={() => setIndex(false)} icon={faAngleLeft} size="2x"/>
            <ProjectIndex>{`${projectIndex + 1} / ${projects.length}`}</ProjectIndex>
            <FontAwesomeIcon className="arrow" onClick={() => setIndex(true)} icon={faAngleRight} size="2x"/>
          </WrapSlider>
        </Wrapper>
      </Background>
    </>
  );
};

export default Projects;
