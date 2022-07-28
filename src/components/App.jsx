import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

import { Container } from './styledApp';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = flag => {
    switch (flag) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedBack = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Number.parseInt((good * 100) / countTotalFeedBack());

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleLeaveFeedback}
          data={{ good, neutral, bad }}
        />
      </Section>

      <Section title="Statistics">
        {Number.isNaN(countPositiveFeedbackPercentage()) ? (
          <Notification message="There is no feedback. Please leave feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedBack()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};

export default App;
