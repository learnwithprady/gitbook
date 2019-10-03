import React, { useState, useEffect } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

function FileContents(props) {
  const [fileContents, setFileContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.github.com/repos/${props.username}/${props.repoName}/contents`;

  useEffect(() => {
    fetch(
     url
    )
      .then(res => res.json())
      .then(response => {
          // Setting File contents only if response is valid
          if(response.length){
            setFileContents(response);
          }
          setIsLoading(false);
      })
      .catch(error => console.log(error));
  },[url]);

  return (
    <div>
      <p> File contents :</p>
      <hr/>
      {/* Progress bar for loading */}
      {isLoading && <CircularProgress />} 
      {fileContents.length && fileContents.map((file, index) => (
        <div key={index}>
          {file.name && (
            <div>
                <p>{file.name}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FileContents;