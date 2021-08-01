import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 90px;
  height: 90px;
  border-radius: 20px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;
export const Title = styled.h1`
  color: #fff;
`;
