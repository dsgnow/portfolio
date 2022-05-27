import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const StyledContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 0 0 20px 0;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px; */
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #f7f7f7;

  @media (min-width: 800px) {
    width: 90%;
    padding: 0 0 20px 0;
    margin: 80px auto;
  }
`

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 0 0;
  background-image: ${({ theme }) => theme.palette.mainGradient.main};
  color: white;
  margin: 0 auto 20px;
  padding: 20px;
  width: 100%;
  ${({ theme }) => `
    ${theme.breakpoints.up('sm')} {
      margin: 0 auto 50px;
      padding: 10px;
      height: 100px;
    `}
`

export const StyledTitleTypography = styled(Typography)`
  font-weight: 500;
  /* margin: 20px 0;
  ${({ theme }) => `
   ${theme.breakpoints.up('sm')} {
    margin: 60px 0;
   `} */
`

export const Spinner = styled.div`
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: show both alternate-reverse 1s;
  display: inline-block;
  width: 10em;
  height: 10em;
  color: white;
  vertical-align: middle;
  pointer-events: none;
  transform: rotateZ(45deg), translate(-50%, -50%);
  perspective: 1000px;
  border-radius: 50%;
  &:before,
  &:after {
     content: '';
     display: block;
     position: absolute;
     top: 0;
     left: 0;
     width: inherit;
     height: inherit;
     border-radius: 50%;
     animation: 1s spin linear infinite;
   }
  &:before {
     transform: rotateX(70deg);
   }
  &:after {
     transform: rotateY(70deg);
     animation-delay: .4s;
   }
  }

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
`


