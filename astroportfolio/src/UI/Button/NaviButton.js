import styled from 'styled-components'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

const StyledNaviButton = styled(Button)`
  color: white;
  animation-delay: 0s;
  margin: unset;
  position: relative;
  padding: 15px 45px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: #2d0200;
  border: 2px solid #ff3000;
  box-shadow: 0 0 0 2px #000000;
  box-sizing: border-box;
  z-index: auto;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #ffffff;
    transform: translate(-11px, -10px);
    z-index: -1;
    transition: transform 0.1s linear;

  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #ffffff;
    transform: translate(11px, 10px);
    z-index: -1;
    transition: transform 0.08s linear;
  }

  &:hover::after, &:hover::before {
    transform: translate(0, 0);
  }

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 0.8;
    outline: none;
    box-shadow: 0 0 10px inset rgba(0, 0, 0,
    0.8);
  }

  &:active::before {
    transform: translate(0, 0) scale(1.1, 1.3);
    opacity: 0.3;
    transition: transform 0.4s cubic-bezier(0, 1, 0, 1.5);
  }

  &:active::after {
    transform: translate(0, 0) scale(1.3, 1.7);
    opacity: 0.6;
    transition: transform 0.4s cubic-bezier(0, 1, 0, 1.5);
  }
`

const NaviButtonOk = (props) => {
  return <StyledNaviButton {...props}>{props.title}</StyledNaviButton>
}

NaviButtonOk.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default NaviButtonOk
