import styled from 'styled-components'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

const StyledButton = styled(Button)`
  border-radius: 50px;
  margin-top: 20px;
  color: black;
  letter-spacing: 2px;
  transition: 0.5s;
  border-width: 2px;
  border-color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0;
  animation: changeOpacity 1s ease-in-out 1 forwards;
  animation-delay: 1.7s;
  z-index: 999;
  &:hover {
    border-width: 2px;
    color: white !important;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`

const StyledButtonOk = (props) => {
  return <StyledButton {...props}>{props.title}</StyledButton>
}

StyledButtonOk.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default StyledButtonOk
