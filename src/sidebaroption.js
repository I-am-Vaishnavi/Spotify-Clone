import React from 'react';
import  "./sidebarOption.css";

function sidebarOption({title,Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="siderOption_icon"/>}
            {Icon ? <h4>{title}</h4>:
            <p>{title}</p>  } 
        </div>
    );
}

export default sidebarOption;
