import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
`;

export const StatisticsListItem = styled.li`
  font-size: 25px;
  list-style: none;
  font-weight: 600;
  :not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const StatisticsElem = styled.p`
  color: ${props =>
    (props.children[2] >= 66 && 'green') ||
    (props.children[2] < 66 && props.children[2] > 33 && 'yellow') ||
    (props.children[2] <= 66 && 'crimson')};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 0px;
`;
