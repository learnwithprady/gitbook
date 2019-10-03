import React, { useState } from "react";
import Webcam from "react-webcam";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user"
  };
   
  const useStyles = makeStyles(theme => ({
    WebcameFrame: {
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: '35px',
    },
    button: {
        display: 'block',
        margin: 'auto',
        marginTop: '10px'
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

  const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
     const classes = useStyles();
     const [userImg, setUserImg] = useState(0);
     const [open, setOpen] = React.useState(false);

     const handleOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUserImg(imageSrc);
      },
      [webcamRef]
    );
   
    return (
      <div>
        <Webcam
          audio={false}
          height={videoConstraints.height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={videoConstraints.width}
          videoConstraints={videoConstraints}
          className={classes.WebcameFrame}
        />
        <Button variant="contained" color="primary" onClick={capture} className={classes.button}>Capture</Button>        
        
        {/* Showing preview only if image is captured */}
        {userImg && <div>
            <Button variant="contained" color="primary" onClick={handleOpen} className={classes.button}>
                Show Preview
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className={classes.paper}>
                <h2 id="transition-modal-title" style={{textAlign: 'center'}}>Preview</h2>
                <p id="transition-modal-description">
                    <img src={userImg} alt="webcam" />
                </p>
            </div>
            </Fade>
            </Modal>
        </div>
        }
      </div>
    );
  };

  export default WebcamCapture;