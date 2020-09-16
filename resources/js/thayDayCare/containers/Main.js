import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

import debounce from "../../common/helpers/debounce";
import { setHeight, setWidth } from "../redux/actions/appWindow";

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

function Main() {
  const dispatch = useDispatch();
  const height = useSelector(state => state.appConfig.appWindow.height);
  const width = useSelector(state => state.appConfig.appWindow.width);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      dispatch(setHeight(window.innerHeight || 0));
      dispatch(setWidth(window.innerWidth || 0));
    }, 1000);
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  const classes = useStyles();

  return (
    <Container fixed style={ { width, height } } className={`app-container ${classes.alignItemsAndJustifyContent}`}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h1>Hi. This is Thay Day Care Page</h1>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default Main;
