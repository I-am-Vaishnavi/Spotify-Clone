import React from 'react';
import "./player.css";
import SideBar from './sidebar';
import Body from "./body"; 
import Footer from './footer';

export default function Player({spotify}) {
    return (
        <div className="player">
            <div className="player_body">
                <SideBar />
                <Body spotify={spotify}/>
            {/*sidebar ,body,footer*/}
            </div>
            {/*footer*/}
            <Footer />
        </div>
    );
}
