import React from 'react';
import PropTypes from 'prop-types';

import {
  StatisticsList,
  StatisticsListItem,
  StatisticsElem,
} from './stylesStatistics';

const Statistics = ({ good, neutral, bad, positivePercentage, total }) => {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsElem>
        Positive feedback:{' '}
        {Number.isNaN(positivePercentage) ? 0 : positivePercentage} %
      </StatisticsElem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
