import * as React from 'react';

interface TimerProps {
  timeRemaining: number;
  onClick: () => Promise<void>;
}
export class Timer extends React.Component<TimerProps, {}> {
  render(): React.ReactElement {
    const { timeRemaining, onClick } = this.props;

    return (
      <>
        <p onClick={onClick}>{timeRemaining}</p>
      </>
    );
  }
}

export default Timer;