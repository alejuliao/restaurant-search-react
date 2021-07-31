import React from 'react';

import {Card, Title} from './styled';

const ImageCard =({photo, title})=>{
  return (
    <Card photo={photo}>
      <Title>{title}</Title>
    </Card>
  )}

export default ImageCard;
