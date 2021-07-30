import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 30vw;
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

