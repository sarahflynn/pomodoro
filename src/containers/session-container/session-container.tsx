import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from '../../components';
import * as SActions from '../../state/session';

const ProgressCircleContainer = styled('div')(`
  width: 400px;
  height: 400px;

  .CircularProgressbar-path {
    stroke: #4791db;
  }

  .CircularProgressbar-text {
    fill: #dc004e;
  }
`);

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

  handleTimerClick = async (): Promise<void> => {
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

  getHMS = (sec: number) => {
    const ms = [Math.floor(sec/60).toString(), Math.floor(sec%60).toString()];
    
    const mmss = ms.map(val => {
      if (val.length < 2) {
        return (`0${val}`)
      }
      return val;
    });

    return `${mmss[0]} : ${mmss[1]}`;
  }

  render(): React.ReactElement {
    const { timeRemaining } = this.props;

    if (!timeRemaining) return null;

    return (
      <>
        <ProgressCircleContainer onClick={this.handleTimerClick}>
          <CircularProgressbar value={timeRemaining} maxValue={1500} text={this.getHMS(timeRemaining)} />
        </ProgressCircleContainer>
        <Button color='primary' onClick={this.handleTimerClick}>Start/Stop</Button>
      </>
    );
  }
}

const mapStore = (state: { [key: string]: any }): SessionContainerProps => ({
  ...state.session,
});

const mapToDispatch = {
  setTimeRemaining: SActions.setTimeRemaining,
  startStop: SActions.startStop,
}

export default connect(mapStore, mapToDispatch)(SessionContainer);
