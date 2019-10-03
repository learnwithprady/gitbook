import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import FileContents from '../_components/FileContents';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    minHeight: '50px',
    backgroundColor: 'orange',
    color: '#fff',
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  gridItem: {
      padding: 15,
  },
  urlStyle: {
      textDecoration: 'underline',
      wordBreak: "break-word",
  },
  cardHeader: {
      color: '#fff'
  },
  cardContent: {
      height: '45px'
  }
}));

export default function MakeRepoCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
      // Material UI grid system
    <Grid item xs={12} sm={4} md={4} className={classes.gridItem}>
        <Card className={classes.card}>
        <CardHeader
            title={props.repository.name}
            subheader={(new Date(props.repository.created_at).toLocaleDateString())}
            className={classes.cardHeader}
        />
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" className={classes.urlStyle} component="a">
          {props.repository.url}
        </Typography>
      </CardContent>
      {/* Area to show files of repository */}
      <CardActions disableSpacing>
      <Tooltip title="Show files" aria-label="Show files">
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </Tooltip>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {/* Rendering file contents only if user expands the card */}
            {expanded && <FileContents username={props.repository.owner.login} repoName={props.repository.name}></FileContents>}
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}