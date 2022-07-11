import React, { Component } from 'react';

import Section from '../components/Section/Section';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Notification from '../components/Notification/Notification';
import Statistics from '../components/Statistics/Statistics';

import { ContainerApp } from './styledContainer';

export default class Container extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const nameState = e.currentTarget.name;

    this.setState(prevState => {
      return { [nameState]: prevState[nameState] + 1 };
    });
  };

  countTotalFeedBack() {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedBack();
    const positiveFeedback = this.state.good;
    return Number.parseInt((positiveFeedback * 100) / totalFeedback);
  }

  render() {
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedBack();

    return (
      <ContainerApp>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onHandleClick}
            data={this.state}
          />
        </Section>

        <Section title="Statistics">
          {Number.isNaN(feedbackPercentage) ? (
            <Notification message="There is no feedback. Please leave feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={feedbackPercentage}
            />
          )}
        </Section>
      </ContainerApp>
    );
  }
}
