import React from "react";
import RepositoriesList from "../_components/RepositoriesList";
import { useAuth0 } from "../react-auth0-wrapper";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '30px',
  },
}));

function App() {
  const { loading, user } = useAuth0();
  const classes = useStyles();
  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div>
        <Button variant="contained" color="primary" className={classes.button}>
          <Link to="/capture">Capture Image</Link>
        </Button>
        <RepositoriesList username={user.nickname}></RepositoriesList>
    </div>
  );
}

export default App;