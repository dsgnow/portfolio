import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NaviButton = styled(Button)`
  color: white;
  position: absolute;
  top: 5%;
  left: -20px;
  transform: translateY(-50%);
  transform: rotate(90deg);
  z-index: 999;
  font-weight: normal;
  letter-spacing: 3px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: 0.3s;
  font-size: 14px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
  }
  &.onWhite {
    color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: white;
    }
  }
`
const NaviStickyButton = (props) => {
  return <NaviButton {...props} className={props.className} component={Link} to={props.route}>{props.title}</NaviButton>
}

NaviStickyButton.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}


export default NaviStickyButton
