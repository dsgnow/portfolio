import * as React from 'react';
import NaviStickyButton from "../../UI/Button/NaviStickyButton";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import TextField from '@mui/material/TextField';
import Button from '../../UI/Button/Button'
import logo from "../../Assets/Images/creative.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faUser, faCity, faMobilePhone, faHeart} from "@fortawesome/free-solid-svg-icons";
import astronaut from "../../Assets/Images/astronautb.svg";
import jobObject from "../../Assets/Images/jobObject.svg";
import jobTitle from "../../Assets/Images/jobTitle.svg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  align-items: center;
`

const ContactWithImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
  @media(orientation: landscape) {
    flex-direction: row;
    width: 90%;
  }
  @media(orientation: landscape) and (min-height: 900px) {
    height: 75%;
  }
  @media(orientation: landscape) and (min-height: 1200px) {
    height: 80%;
  }
`

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  @media(orientation: landscape) and (min-width: 700px) {
    width: 60%;
  }
  @media(orientation: landscape) and (min-width: 1200px) {
    width: 40%;
  }
`

const WrapImages = styled.div`
  height: 0%;
  display: flex;
  @media (orientation: portrait) {
     margin-top: 50px;
  }
  @media(min-height: 900px) {
    height: 20%;
  }
  @media (orientation: landscape) {
    margin-top: unset;
  }
  @media (orientation: landscape) and (min-width: 1000px) {
    height: 30%;
    margin-left: 100px;
  }
  @media (orientation: landscape) and (min-width: 1500px) {
    height: 40%;
  }
`

const AstronautImg = styled.img`
  height: 100%;
  @keyframes astronautMoving {
    100% {
      transform: translate(5%, 5%);
    }
  }
  animation: astronautMoving 3s ease-in-out infinite alternate-reverse, show both 2s;
`

const WrapJobObject = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
`

const JobObjectImg = styled.img`
  @keyframes objectPulseAndRotate {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.1);
    }
  }
  animation: objectPulseAndRotate 5s ease-in-out infinite;
  animation-direction: alternate-reverse;
  animation: show both 2s;
  height: 70%;
  z-index: 1;  
`

const JobObjectTitleImg = styled.img`
  height: 50%;
  animation: show both 2s;
`

const WrapFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 10%;
  position: relative;
  width: 100%;
  animation: fadeIn 1s both 0.3s;
  display: flex;
  @media(orientation: landscape) {
    display: none;
  }
  @media(orientation: landscape) and (min-height: 600px) {
    display: flex;
  }
  @media(orientation: landscape) and (min-height: 900px) {
    height: 25%;
  }
  @media(orientation: landscape) and (min-height: 1200px) {
    height: 20%;
  }
`

const WrapTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`

const Title = styled(Typography)`
  color: white;
  animation: show 2s both;
  &.primary {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  @media(orientation: landscape) {
    display: none;
  }
  @media(orientation: landscape) and (min-height: 500px) {
    display: block;
  }
`

const Form = styled.form`
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: show 2s both 0.3s;
  @media(orientation: landscape) {
    padding: 5px 35px;
    gap: 5px;
  }
  @media(orientation: landscape) and (min-height: 600px) {
    padding: 35px;
    gap: 20px;
  }
`

const StyledTextField = styled(TextField)`
  width: 100%;
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
  @media(orientation: landscape) and (min-height: 1200px) {
    gap: 50px;
  }
`

const WrapTexts = styled.span`
  display: none;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 30px;
  @media(orientation: landscape) and (min-height: 900px) {
    display: flex;
  }
`

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTypography = styled(Typography)`
  color: white;
  font-weight: bold;
  &.list {
    font-size: 0.9rem;
    font-weight: normal !important;
    padding: unset !important;
  }
  &.linksHeader {
    font-size: 1rem;
  }
`

const LogoImg = styled.img`
  background-color: white;
  width: 120px;
  padding: 10px 20px;
  border-radius: 20px;
  height: 80%;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
   transform: scale(1.1);
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: #0e0f15;
  width: 20px;
  padding-right: 20px;
`

const StyledList = styled.ul`
  color: white;
  text-align: left;
  text-decoration: unset;
  margin: unset;
  & a {
    text-decoration: unset;
    color: white;
  }
  & li {
    color: white;
    font-weight: normal;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`

const StyledListNoDots = styled.ul`
  color: white;
  list-style: none;
  text-align: left;
  margin: unset;
  &li {
    color: white;
    font-weight: normal;
  }
`

const StyledError = styled(Typography)`
  margin-top: 5px;
  align-self: flex-start;
  color: white;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

function Contact() {
  const sendEmail = (values) => {
    const templateParams = {
      name: values.name,
      message: values.message,
      email: values.email
    };

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, templateParams, process.env.REACT_APP_EMAILJS_USERID)
      .then((response) => {
        setAlert('success')
        setAlertMessage('A message was successfully sent!')
        setOpen(true)
      }, (err) => {
        setAlert('error')
        setAlertMessage('Unfortunately, the message could not be sent.')
        setOpen(true)
      });
  }

  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = React.useState('success');
  const [alertMessage, setAlertMessage] = React.useState('Success!');
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }

  return (
    <>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open} autoHideDuration={6000}
                onClose={() => setOpen(false)}>
        <Alert onClose={handleClose}
               severity={alert}
               sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <NaviStickyButton route="/navigation" title="Navi"></NaviStickyButton>
      <Wrapper>
        <ContactWithImage>
          <ContactForm>
            <WrapTitle>
              <Title variant="h1">Contact </Title>
              <Title className={"primary"} variant="h1">me </Title>
            </WrapTitle>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validate={values => {
                let errors = {};
                let regex = new RegExp("!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i");
                if (!values.email) {
                  errors.email = "Email is required";
                } else if (regex.test(values.email)) {
                  errors.email = "Invalid email address";
                }

                if (!values.name) {
                  errors.name = "Name is required";
                }

                if (!values.message) {
                  errors.message = "Message is required";
                }
                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                sendEmail(values);
                resetForm();
              }}>
              {props => (
                <Form onSubmit={props.handleSubmit}>
                  <FlexColumn>
                    <StyledTextField onChange={props.handleChange} onBlur={props.handleBlur} name="name" value={props.values.name}
                                     autoComplete='off' InputLabelProps={{style : {color : 'white'} }}
                                     size="large" id="name" label="name" variant="outlined"></StyledTextField>
                    {props.errors.name && <StyledError variant="subtitle2">{props.errors.name}</StyledError>}
                  </FlexColumn>
                  <FlexColumn>
                    <StyledTextField onChange={props.handleChange} onBlur={props.handleBlur} name="email" value={props.values.email}
                                     type="email" autoComplete='off' InputLabelProps={{style : {color : 'white'} }}
                                     size="large" id="email" label="email" variant="outlined"/>
                    {props.errors.email && <StyledError variant="subtitle2">{props.errors.email}</StyledError>}
                  </FlexColumn>
                  <FlexColumn>
                    <StyledTextField onChange={props.handleChange} onBlur={props.handleBlur} name="message" value={props.values.message}
                                     autoComplete='off' InputLabelProps={{style : {color : 'white'} }}
                                     multiline rows={4}  size="large" id="message"
                                     label="message" variant="outlined"/>
                    {props.errors.message && <StyledError variant="subtitle2">{props.errors.message}</StyledError>}
                  </FlexColumn>
                    <Button
                      size="large"
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={{ color: 'white', animationDelay: '0.1s' }}
                      title="SEND">
                    </Button>
                </Form>
              )}
            </Formik>
          </ContactForm>
          <WrapImages>
            <AstronautImg
              src={astronaut}
              alt="astronaut">
            </AstronautImg>
            <WrapJobObject>
              <JobObjectImg
                src={jobObject}
                alt="job object">
              </JobObjectImg>
              <JobObjectTitleImg
                src={jobTitle}
                alt="job object title">
              </JobObjectTitleImg>
            </WrapJobObject>
          </WrapImages>
        </ContactWithImage>
        <WrapFooter>
            <WrapFooterIcons>
              <LogoImg src={logo} alt="creative code logo">
              </LogoImg>
              <a href={'https://www.facebook.com/piotr.stachowicz.5'} target="_blank"  rel="noreferrer">
                <StyledIcon icon={faFacebook} size="lg" style={{color: "#0e0f15"}}/>
              </a>
              <a href={'https://www.linkedin.com/in/piotr-stachowicz-25a662160/'} target="_blank"  rel="noreferrer">
                <StyledIcon icon={faLinkedin} size="lg" style={{color: "#0e0f15"}}/>
              </a>
            </WrapFooterIcons>
          <WrapTexts>
            <StyledTypography variant="h2">Let's be in touch </StyledTypography>
            <FooterText>
              <StyledTypography className={'linksHeader'} variant="caption">Useful links</StyledTypography>
              <StyledList>
                <li><StyledTypography component={Link} to="/" className={'list'} variant="caption">Start</StyledTypography></li>
                <li><StyledTypography component={Link} to="/skills"  className={'list'} variant="caption">Skills</StyledTypography></li>
                <li><StyledTypography component={Link} to="/projects"  className={'list'} variant="caption">Projects</StyledTypography></li>
                <li><StyledTypography component={Link} to="/about"  className={'list'} variant="caption">About</StyledTypography></li>
              </StyledList>
            </FooterText>
            <FooterText>
              <StyledTypography className={'linksHeader'} variant="caption">About</StyledTypography>
              <StyledListNoDots>
                <li>
                  <Icon icon={faUser} size="sm" style={{color: "#ffffff"}}/>
                  <StyledTypography className={'list'} variant="caption">Piotr Stachowicz</StyledTypography>
                </li>
                <li>
                  <Icon icon={faCity} size="sm" style={{color: "#ffffff"}}/>
                  <StyledTypography className={'list'} variant="caption">Zabrze City</StyledTypography>
                </li>
                <li>
                  <Icon icon={faMobilePhone} size="sm" style={{color: "#ffffff"}}/>
                  <StyledTypography className={'list'} variant="caption">517 713 069</StyledTypography>
                </li>
                <li>
                  <Icon icon={faHeart} size="sm" style={{color: "#ffffff"}}/>
                  <StyledTypography className={'list'} variant="caption">Made with love in 2022</StyledTypography>
                </li>
              </StyledListNoDots>
            </FooterText>
          </WrapTexts>
        </WrapFooter>
      </Wrapper>
    </>
  );
}

export default Contact;
