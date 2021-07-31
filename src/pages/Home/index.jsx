import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';


import { Container, Search, Logo, Wrapper, Map,CarouselTitle, Carousel } from './styles';
import fakeImg from '../../assets/restaurante-fake.png';
import {Card, RestaurantCard, Modal} from '../../components'
import logo from '../../assets/logo.svg';
import MaterialIcon from '@material/react-material-icon';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    autoPlay: true,
  };
  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo" />
          <TextField
            label='Pesquisar'
            outlined
          // helperText={<HelperText>Help Me!</HelperText>}
          // onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="search"/>}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Sua Área</CarouselTitle>
          <Carousel {...settings}>
              <Card photo={fakeImg} title='nome do restaurante'/>
              <Card photo={fakeImg} title='nome do restaurante'/>
              <Card photo={fakeImg} title='nome do restaurante'/>
              <Card photo={fakeImg} title='nome do restaurante'/>
              <Card photo={fakeImg} title='nome do restaurante'/>
              <Card photo={fakeImg} title='nome do restaurante'/>
              <Card photo={fakeImg} title='nome do restaurante'/>
            </Carousel>
            <button onClick={() =>setModalOpened(true)}>Abrir Modal</button>
        </Search>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </Container>
      <Map/>
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
    </Wrapper>
  )
}

export default Home;
