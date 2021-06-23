import React from 'react';
import "./body.css";
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import  FavoriteIcon from '@material-ui/icons/Favorite';
import  MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
import PlayCircleFilledIcon  from '@material-ui/icons/PlayCircleFilled';
import SongRow from './SongRow';

export default function Body({spotify}) {
    const[{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify}/>
         <div className="body_info">
             <img src={discover_weekly?.images[0].url} alt=""/>
             <div className="body_infoText">
                <strong>PLAYLIST</strong>
                <h2>Songs for Life </h2>
                <p> {discover_weekly?.description}</p>
             </div>
             </div>
             <div className="body_songs">
                 <div className="body_icon">
                     <PlayCircleFilledIcon className="body_shuffle"/>
                     <FavoriteIcon fontsize="large"/>
                     <MoreHorizIcon />
                 </div>
                 {discover_weekly?.tracks.items.map(item=>(
                    <SongRow track={item.track}/> 
                 ) )}
             </div>   
        </div>
    );
}
