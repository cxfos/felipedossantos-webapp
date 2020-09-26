import React from 'react';
import { useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';

import debounce from "../../common/helpers/debounce";
import { setHeight, setWidth } from "../redux/actions/appWindow";
import SignIn from "../components/SignIn";

function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      dispatch(setHeight(window.innerHeight || 0));
      dispatch(setWidth(window.innerWidth || 0));
    }, 1000);
    window.addEventListener('resize', debouncedHandleResize)
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <SignIn />
    </Container>
  );
}

export default Main;
