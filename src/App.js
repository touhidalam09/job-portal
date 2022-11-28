
import Button from '@material-ui/core/Button';
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          welcome MUI
        </h1>
        <Button variant="contained">this is a material UI button</Button>
      </>
    );
  }
}

export default hot(App);
