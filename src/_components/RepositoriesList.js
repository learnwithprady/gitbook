import React, { useState, useEffect } from "react";
import FileContents from "../_components/FileContents";

const RepositoriesList = (props) => {
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
    <div>
      <h1> Showing all repositories </h1>
      {isLoading && <p>Loading... Please wait</p>}

      {repositoryList.length && repositoryList.map((repository, index) => (
        <div key={index}>
          {repository.name && (
            <section>
              <div>
                <h3>{repository.name}</h3>
                <FileContents username={props.username} repoName={repository.name}></FileContents>
              </div>
              <hr />
            </section>
          )}
        </div>
      ))}
    </div>
  );
}

export default RepositoriesList;