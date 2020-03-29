import * as React from 'react';
import { connect } from 'react-redux';
import { Timer } from '../../components';
import * as SActions from '../../state/session';

interface SessionContainerReduxProps {
  setTimeRemaining: typeof SActions.setTimeRemaining;
  startStop: typeof SActions.startStop;
  timeRemaining: number;
  timerRunning: boolean;
}

interface SessionContainerProps extends SessionContainerReduxProps {}

interface SessionContainerState {
  interval: NodeJS.Timeout;
}
export class SessionContainer extends React.Component<
  SessionContainerProps,
  SessionContainerState
> {

  state = {
    interval: null,
  }

  subtractOneSecond = (): void => {
    const { setTimeRemaining } = this.props;

    setTimeRemaining(-1);
  }

  async handleTimerClick(): Promise<void> {
    const { startStop } = this.props;

    await startStop();
    this.startStopTimer();
  }

  startStopTimer = (): void => {
    const { timerRunning } = this.props;
    const { interval } = this.state;

    if (timerRunning) {
      const interval = setInterval(this.subtractOneSecond, 1000);
      this.setState({ interval })
    } else {
      clearInterval(interval);
    }
  }

  render(): React.ReactElement {
    const { timeRemaining } = this.props;

    if (!timeRemaining) return null;

    return (
      <>
        <h1>Session</h1>
        <Timer timeRemaining={timeRemaining} onClick={this.handleTimerClick} />
      </>
    );
  }
}

const mapStore = (state: { [key: string]: any }): SessionContainerProps => ({
  ...state.session,
});

const mapDispatch = {
  setTimeRemaining: SActions.setTimeRemaining,
  startStop: SActions.startStop,
}

export default connect(mapStore, mapDispatch)(SessionContainer);
