import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'



const useStyles = makeStyles((theme) => {
    return {
      root: {
        height: 'inherit'  
      }
    }
  })

const Song = (props) => {

    const location = useLocation();
    const classes = useStyles();
    const songPath = location.pathname;
    const {songName} = props;
    const [songLyrics, setSongLyrics] = useState('');
    const [showLyrics, setShowLyrics] = useState(false);

    useEffect(() => {
       setShowLyrics(false);
    }, [songPath]);

    function buttonShowLyrics() {
        axios.get(`http://localhost:5001/Music${songPath}`)
        .then(res => {
            const lyrics = res.data;
            setSongLyrics(lyrics);
            setShowLyrics(true);
        });
    } 

    return (
        <div className={classes.root}>   
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                {songName}
            </Typography>
            <br />
            <img src={`../images/${songName}.jpg`} alt={songName} height="300px" width="300px"/> 
            <br />
            <br />
            <Button variant="contained" onClick={buttonShowLyrics}>Get Lyrics</Button>
            <br />
            <br />
            { showLyrics ? <div dangerouslySetInnerHTML={{__html: songLyrics}} /> : null }
        </div>
        
    );
};

export default Song;
