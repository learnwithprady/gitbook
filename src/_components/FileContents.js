import React, { useState, useEffect } from "react";

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
          if(response.length){
            setFileContents(response);
            setIsLoading(false);
          }
      })
      .catch(error => console.log(error));
  },[url]);

  return (
    <div>
      <h5> File contents :</h5>
      {isLoading && <p>Loading</p>}
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