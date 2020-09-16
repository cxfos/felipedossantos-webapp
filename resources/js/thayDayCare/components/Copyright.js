import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
  const title = useSelector(state => state.appConfig.title);
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={`${window.location.origin}/thaydaycare`}>
        { title }
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
