import React from 'react';
import "./footer.css";
import  PlayCircleOutlineIcon  from '@material-ui/icons/PlayCircleOutline';
import  SkipPreviousIcon  from '@material-ui/icons/SkipPrevious';
import  SkipNextIcon  from '@material-ui/icons/SkipNext';
import  ShuffleIcon  from '@material-ui/icons/Shuffle';
import  RepeatIcon  from '@material-ui/icons/Repeat';
import  PlaylistPlayIcon from'@material-ui/icons/PlaylistPlay'
import VolumeDownIcon  from '@material-ui/icons/VolumeDown';
import { Grid,Slider } from '@material-ui/core';
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo"
                src="https://i.scdn.co/image/ab67616d0000b273abbe8497f69584ee3173133b" 
                alt=""/>
                <div className="footer_songInfo">

                <h4>Yaaraiyum Ivlo Azhaga</h4>
                <p>Vivek- Mervin , STR</p>
                </div>
                </div>
             <div className="footer_center">
                <ShuffleIcon className="footer_center_green" />
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className ="footer_icon"/>
                <RepeatIcon className="footer_center_green"/>
                {/*<p>PLayer controls</p>*/}
            </div>
            <div className="footer_right">
                <Grid container spacing ={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider  />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
