import styled from 'styled-components';

export const RestaurantCardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding: 10px;
  background-color: whitesmoke;
  border-left: 5px solid transparent;
  cursor: pointer;
  :hover {
    border-left-color: ${(props) => props.theme.colors.warning};
    /* background-color: ${(props) => props.theme.colors.background}; */
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color:${(props) => props.theme.colors.text};
  font-size: 1em;
  font-weight: bold;
  margin: 16px 0;}
`;
export const Address = styled.h1`
  color:gray;
  font-size: .9em;
  margin: 16px 0;}
`;

export const RestaurantPhoto = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
`
