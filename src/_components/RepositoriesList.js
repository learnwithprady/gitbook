import React, { useState, useEffect } from "react";
import MakeRepoCard from "./MakeRepoCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '1% 8%',
  }
}));

const RepositoriesList = (props) => {
  const classes = useStyles();
  const [repositoryList, setRepositoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.github.com/users/${props.username}/repos`;

  useEffect(() => {
    fetch(
      url
    )
      .then(res => res.json())
      .then(response => {
        setRepositoryList(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  },[url]);

  return (
    <div className={classes.container}>
      <h1> Showing all repositories </h1>
      {isLoading &&  <CircularProgress />}
      <Grid container>
        {repositoryList.length && repositoryList.map((repository, index) => (
          <MakeRepoCard key={index} repository={repository}></MakeRepoCard>
        ))}
      </Grid>
    </div>
  );
}

export default RepositoriesList;