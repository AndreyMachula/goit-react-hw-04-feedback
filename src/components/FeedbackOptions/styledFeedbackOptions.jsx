import styled from 'styled-components';

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 25px;
  }
`;
