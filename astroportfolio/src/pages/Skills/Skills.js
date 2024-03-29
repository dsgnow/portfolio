import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NaviStickyButton from '../../UI/Button/NaviStickyButton'
import {faReact, faVuejs, faHtml5, faCss3, faAngular, faSass, faGit} from "@fortawesome/free-brands-svg-icons";
import rocks from "../../Assets/Images/rocks.svg";
import rocket from "../../Assets/Images/rocket.svg";
import cloud3 from "../../Assets/Images/grey3Right.svg";
import cloud4 from "../../Assets/Images/grey4Right.svg";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Spinner } from "../../Assets/Styles/GlobalStyles";

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: space-evenly;
  align-items: center;
  @media(orientation: landscape) {
    justify-content: center;
  }
`

const RocksImg = styled.img`
  width: 100vw;
  height: 10%;
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  @media(orientation: landscape) {
    height: auto;
  }
`

const Rocket = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`
const Technology = styled.div`
  @keyframes showTechnology {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
  display: flex;
  align-items: stretch;
  flex-wrap: no-wrap;
  flex-direction: column;
  max-height: 70vh;
  max-width: 90vw;
  overflow-y: scroll;
  gap: 20px;
  animation: showTechnology 5s both 2.5s;
  padding-bottom: 70px;
  @media (orientation: landscape) {
  flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 10%;
  }
`

const WrapTitle = styled.div`
  display: flex;
  gap: 10px;
  animation: showTechnology 3s both 2s;
  @media (orientation: landscape) {
    padding-bottom: 30px;
  }
  @media (orientation: landscape) and (min-width: 1000px) {
    padding-bottom: 70px;
  }
`

const Skill = styled.div`
  border: 2px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  background-color: #0e0f15;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
  }
  @media (orientation: landscape) and (min-width: 1000px) {
    width: 30%;
  }
`

const SkillName = styled(Typography)`
  color: white;
  padding: unset;
  margin: 0 10px;
`

const Title = styled(Typography)`
  font-size: 30px;
  color: white;
  &.primary {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  @media(orientation: landscape) and (min-width: 1000px) {
    font-size: 70px;
  }
`

const SkillLevel = styled(Typography)`
  color: white;
  margin: unset;
`

const RocketImg = styled.img`
  @keyframes rocketStart {
    0% {
      bottom: 0;
    }

    100% {
      bottom: 150%;
    }
  }
  
  height: 40%;
  width: 100%;
  z-index: 1;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: rocketStart 6s both 2s;
`

const Clouds = styled.div`
  height: 100%;
  position: relative;
  z-index: 3;
  @keyframes greyCloudsRocket {
    0% {
      opacity: 0;
      transform: translate(-50%, 0);
    }


    60% {
      opacity: .9;
      transform: translate(-55%, 5%);
    }

    100% {
      opacity: 0;
      transform: translate(-45%, 0);
    }
  }
`

const CloudImg1 = styled.img`
  position: absolute;
  width: 150%;
  bottom: 0;
  right: 0;
  animation: greyCloudsRocket 2s reverse both 1s;
  @media (orientation: landscape) {
    width: 60%;
  }
`

const CloudImg2 = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  animation: greyCloudsRocket 3s reverse both 1s;
  @media (orientation: landscape) {
    width: 50%;
  }
`

const CloudImg3 = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  animation: greyCloudsRocket 2s reverse both 1s;
  @media (orientation: landscape) {
    width: 50%;
  }
`

const CloudImg4 = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  animation: greyCloudsRocket 3s reverse both 1s;
  @media (orientation: landscape) {
    width: 50%;
  }
`

const StyledSpinnerTitle = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white !important;
  animation: show 1s ease-in-out infinite alternate-reverse;
`

const Main = styled.div`
 animation: show both 1s 1s; 
`

function Skills() {

  const skills = [
    {icon: faAngular, name: 'Angular', level: '', key: 1},
    {icon: faReact, name: 'React', level: '', key: 2},
    {icon: faReact, name: 'React-Native', level: '', key: 3},
    {icon: faHtml5, name: 'Html5', level: '', key: 4},
    {icon: faCss3, name: 'Css3', level: '', key: 5},
    {icon: faSass, name: 'Sass', level: '', key: 6},
    {icon: faGit, name: 'Git', level: '', key: 7},
    {icon: null, name: 'Javascript ES6+', level: '', key: 8},
    {icon: null, name: 'Typescript', level: '', key: 9},
    {icon: null, name: 'PrimeNG', level: '', key: 10},
    {icon: null, name: 'Material UI', level: '', key: 11},
    {icon: null, name: 'RWD', level: '', key: 12},
    {icon: null, name: 'Figma', level: '', key: 13},
    {icon: null, name: 'Adobe', level: '', key: 14},
  ]

  return (
    <>
      <Spinner>
        <StyledSpinnerTitle variant="subtitle1">Loading</StyledSpinnerTitle>
      </Spinner>
      <NaviStickyButton route="/navigation" title="Navi"></NaviStickyButton>
      <Main>
        <RocksImg src={rocks} alt="rocks" />
        <Wrapper>
          <WrapTitle>
            <Title variant="h1">Technology </Title>
            <Title className={"primary"} variant="h1">stack </Title>
          </WrapTitle>
          <Technology>
            {skills.map((skill) =>
              <Skill key={skill.key}>
                <FontAwesomeIcon icon={skill.icon} size="lg" style={{color: "white"}}/>
                <SkillName variant="button">{skill.name}</SkillName>
                <SkillLevel variant="subtitle2">{skill.level}</SkillLevel>
              </Skill>
            )}
          </Technology>
          <Rocket>
            <RocketImg
              src={rocket}
              alt="rocket" />
            <Clouds>
              <CloudImg1
                src={cloud3}
                alt="cloud" />
              <CloudImg2
                src={cloud4}
                alt="cloud" />
              <CloudImg3
                src={cloud3}
                alt="cloud" />
              <CloudImg4
                src={cloud4}
                alt="cloud" />
            </Clouds>
          </Rocket>
        </Wrapper>
      </Main>
    </>
  )
}

export default Skills
