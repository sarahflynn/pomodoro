import * as React from 'react';

interface TimerProps {
  timeRemaining: number;
}
export class Timer extends React.Component<TimerProps, {}> {
  render(): React.ReactElement {
    const { timeRemaining, } = this.props;

    return (
      <>
        <p>{timeRemaining}</p>
      </>
    );
  }
}

export default Timer;