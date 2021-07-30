import React from 'react';
import {RestaurantCardStyle,RestaurantInfo, Title,Address, RestaurantPhoto} from './styled'
import ReactStars from "react-rating-stars-component";
import fakeimg from '../../assets/restaurante-fake.png';
const RestaurantCard = () =>(
  <RestaurantCardStyle>
    <RestaurantInfo>
      <Title>nome restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="orange"/>
      <Address>informacoes</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={fakeimg} alt="foto Restaurante"/>
  </RestaurantCardStyle>
);

export default RestaurantCard;
