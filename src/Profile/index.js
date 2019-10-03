import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useAuth0 } from "../react-auth0-wrapper";
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    top: '50%',
    position: 'absolute',
    left: '50%',
    transform: "translate(-50%,-50%)",
  },
  media: {
    height: '32vh',
    opacity: 0.7,
  },
  avatar: {
    margin: 10,
  },
  cardContent: {
    position: 'relative',
    minHeight: '22vh'
  },
  typography: {
    top: -65,
    color: '#fff',
    position: 'absolute',
    fontSize: '24',
    background: 'orange',
    display: 'inline-block',
    padding: '0 10px'
  },
  verifiedIcon: {
    color: 'green',
    top: 3,
    position: 'relative',
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    );
  };

  return (
    //   Card showing user profile
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
            className={classes.media}
            image={user.picture}
            title={user.nickname}>
          </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
            {user.nickname} {user.email_verified && <CheckCircleIcon className={classes.verifiedIcon} />}
          </Typography>
          <Typography variant="body2" component="div">
            <h3>About</h3>
            <hr/>
            <p>Has primary email <code>{user.email}</code></p>
            <p>Last active on <code>{(new Date(user.updated_at)).toLocaleDateString()}</code></p>     
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}