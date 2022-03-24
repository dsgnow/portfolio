import styled from 'styled-components'
import PropTypes from 'prop-types'
import StarTheme from "../StarTheme/StarTheme";
import rocks from "../../Assets/Images/rocks.svg";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1920px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  @media(orientation: landscape) and (min-height: 800px) and (width: 1000px) {
    height: 100%;
    overflow: hidden;
  }
`

function Layout(props) {
  return (
    <Wrapper>
      <StarTheme reloadOnResize={props.reloadOnResize} speed={props.speed}></StarTheme>
      {props.header}
      {/* <div className="container">{props.menu}</div> */}
      {props.content}
      {/* <div>{props.footer}</div> */}
    </Wrapper>
  )
}

Layout.propTypes = {
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  speed: PropTypes.number.isRequired
}

export default Layout
