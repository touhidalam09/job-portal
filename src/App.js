
import Button from '@material-ui/core/Button';
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          JOB PORTAL
        </h1>
        <Button variant="contained">CLICK ME</Button>
      </>
    );
  }
}

export default hot(App);
