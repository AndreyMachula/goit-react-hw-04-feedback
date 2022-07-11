import React from 'react';
import PropTypes from 'prop-types';

import { ContainerButtons, Button } from './styledFeedbackOptions';

const FeedbackOptions = ({ data, onLeaveFeedback }) => {
  const buttonsName = Object.keys(data);

  return (
    <ContainerButtons>
      {buttonsName.map(name => (
        <Button
          key={buttonsName.indexOf(name)}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </Button>
      ))}
    </ContainerButtons>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  data: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;