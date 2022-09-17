// import { Component } from 'react'
import { useState } from 'react';
import { Section } from './Section/Section.jsx'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx'
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';

export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];

  function onLeaveFeedback ({ target: { name } }) {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error('Incorrect feedback name');
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  
  function countPositiveFeedbackPercentage () {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
      <div className="app">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
        {total ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage ()}
          /> : <Notification message={"There is no feedback"}/> }
        </Section>
      </div>
    );
};

// export default App