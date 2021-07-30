import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`
export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 35vw;
  height: 100vh;
  overflow-y: auto;
`

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: whitesmoke;
  padding: 16px;
  `

export const Logo = styled.img`
    margin: 15px;
  `
export const Map = styled.div`
background: tomato;
width: 100vw;
`

export const CarouselTitle = styled.h1`
  color:${(props) => props.theme.colors.text};
  font-size: 1.4em;
  font-weight: bold;
  line-height: 1.5em;
  margin: 16px 0;}
`
export const Carousel = styled(Slider)`
  .slick-slide{
    margin-right: 16px;
  }
`
