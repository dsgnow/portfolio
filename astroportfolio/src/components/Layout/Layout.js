import styled from 'styled-components'
import PropTypes from 'prop-types'
import StarTheme from "../StarTheme/StarTheme";
import rocks from "../../Assets/Images/rocks.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
`

const StyledStarTheme = styled.div`
  left: 0;
  top: 0;
  z-index: -1;
`
function Layout(props) {
  return (
    <Wrapper>
      <StyledStarTheme style={{ position: 'absolute' }}>
        <StarTheme speed={0.25}></StarTheme>
      </StyledStarTheme>
      {props.header}
      {/* <div className="container">{props.menu}</div> */}
      {props.content}
      {/* <div>{props.footer}</div> */}
    </Wrapper>
  )
}

Layout.propTypes = {
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
}

export default Layout
