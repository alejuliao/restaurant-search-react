import React from 'react';
import {RestaurantCardStyle,RestaurantInfo, Title,Address, RestaurantPhoto} from './styled'
import ReactStars from "react-rating-stars-component";
import fakeimg from '../../assets/restaurante-fake.png';
const RestaurantCard = ({restaurant}) =>(
  <RestaurantCardStyle>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="orange"/>
      <Address>{restaurant.vicinity || restaurant.formatted_addres}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : fakeimg}
      alt={restaurant.name}
    />
  </RestaurantCardStyle>
);

export default RestaurantCard;
