import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import configureStore from "./redux/store";

const store = configureStore({title: 'no title', description: 'no description' });
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function InitialApp() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000);
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  const classes = useStyles();

  return (
    <Provider store={store}>
      <CssBaseline />
      <Container fixed style={ { width: dimensions.width, height: dimensions.height } } className={`app-container ${classes.alignItemsAndJustifyContent}`}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
          <h1>Hi. This is Thay Day Care Page</h1>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </Provider>
  );
}

export default InitialApp;

if (document.getElementById('thay_daycare_app')) {
    ReactDOM.render(<InitialApp />, document.getElementById('thay_daycare_app'));
}
