import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
`
function Layout(props) {
  return (
    <Wrapper>
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
