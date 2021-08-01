import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { RestaurantCardStyle, RestaurantInfo, Title, Address, RestaurantPhoto } from './styled';
import { Skeleton } from '../index';
import fakeimg from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <RestaurantCardStyle onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="orange" />
        <Address>{restaurant.vicinity || restaurant.formatted_addres}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : fakeimg}
        onLoad={() => setImageLoaded(true)}
        alt={restaurant.name}
      />
      {!imageLoaded && <Skeleton width="80px" height="80px" />}
    </RestaurantCardStyle>
  );
};

export default RestaurantCard;
