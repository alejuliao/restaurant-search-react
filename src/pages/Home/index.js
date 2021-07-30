import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';

import { Container, Search } from './styles';
import Logo from '../../assets/logo.svg'

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <Container>
        <Search>
          <img src={Logo} alt="Logo" />
          <TextField
            label='Pesquisar'
            outlined
          // helperText={<HelperText>Help Me!</HelperText>}
          // onTrailingIconSelect={() => this.setState({value: ''})}
          // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
        </Search>
      </Container>
    </div>
  )
}

export default Home;
