import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 90px;
  height: 90px;
  border-radius: 20px;
  background-image: url(${(props)=> props.photo});
  background-size: cover;
  `
  const Title = styled.div`
    color:#fff;
  `
const ImageCard =({photo, title})=>{
  return <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
}

export default ImageCard;
