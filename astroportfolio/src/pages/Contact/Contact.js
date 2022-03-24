import NaviStickyButton from "../../UI/Button/NaviStickyButton";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextField from '@mui/material/TextField';
import Button from '../../UI/Button/Button'
import logo from "../../Assets/Images/creativeBlack.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
`

const WrapContactForm = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const WrapImage = styled.div`
  height: 0%;
  background-color: #8d8d8d;
`
const WrapFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 10%;
  position: relative;
`

const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`

const Title = styled(Typography)`
  color: white;
  &.primary {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const Form = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.palette.primary.main};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }

    &:hover fieldset {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }

    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  & .MuiOutlinedInput-input, .MuiOutlinedInput-root {
    color: white;
    background-color: #0e0f15;
  }
`

const WrapFooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LogoImg = styled.img`
  background-color: white;
  width: 120px;
  padding: 10px 20px;
  border-radius: 20px;
  height: 80%;
  transition: 0.3s;
  &:hover {
   transform: scale(1.1);
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`

function Contact() {

  return (
    <>
      <NaviStickyButton route="/navigation" title="Navi"></NaviStickyButton>
      <Wrapper>
        <WrapContactForm>
          <WrapTitle>
            <Title variant="h1">Contact </Title>
            <Title className={"primary"} variant="h1">me </Title>
          </WrapTitle>
          <Form>
            <StyledTextField autoComplete='off' InputLabelProps={{style : {color : 'white'} }}  size="large" id="name" label="name" variant="outlined"/>
            <StyledTextField autoComplete='off' InputLabelProps={{style : {color : 'white'} }}  size="large" id="email" label="email" variant="outlined"/>
            <StyledTextField autoComplete='off' InputLabelProps={{style : {color : 'white'} }}
                             multiline rows={4}  size="large" id="message"
                             label="message" variant="outlined"/>
            <Button
              size="large"
              color="primary"
              variant="contained"
              style={{ color: 'white', animationDelay: '0.1s' }}
              title="SEND">
            </Button>
          </Form>
        </WrapContactForm>
        <WrapImage></WrapImage>
        <WrapFooter>
            <WrapFooterIcons>
              <LogoImg src={logo} alt="creative code logo">
              </LogoImg>
              <StyledIcon icon={faFacebook} size="lg" style={{color: "#0e0f15"}}/>
              <StyledIcon icon={faLinkedin} size="lg" style={{color: "#0e0f15"}}/>
            </WrapFooterIcons>
        </WrapFooter>
      </Wrapper>
    </>
  );
}

export default Contact;