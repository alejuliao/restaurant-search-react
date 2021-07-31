/* eslint-disable camelcase */
import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';

import {useSelector} from 'react-redux'
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';
import fakeImg from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal,Map} from '../../components';
import logo from '../../assets/logo.svg';
import MaterialIcon from '@material/react-material-icon';


const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);
  const [placeId, setPlaceId] = useState('');
  const [query, setQuery] = useState('');
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(placeId){
    setPlaceId(placeId);
    setModalOpened(true);
  }


  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo" />
          <TextField
            label='Pesquisar'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Sua Área</CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : fakeImg}
                title={restaurant.name}
              />
            ))}
            </Carousel>
            {/* <button onClick={() =>setModalOpened(true)}>Abrir Modal</button> */}
        </Search>
        {restaurants.map((restaurant) => (
          <RestaurantCard onClick={()=> handleOpenModal(restaurant.place_id)} restaurant={restaurant}/>
        ))}

      </Container>
      <Map query={query} placeId={placeId}/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>{restaurantSelected?.opening_hours?.isOpen ? 'Aberto Agora' : 'Fechado Agora'}</ModalContent>
      </Modal>
    </Wrapper>
  )
}

export default Home;
