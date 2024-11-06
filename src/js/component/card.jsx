import React from "react";

export const Card = ({title, text, icon}) => {

    return (
        <>  
            <div className="card">
                <div className="icon">{icon}</div>
                <div className="content">
                    <h5>{title}</h5>
                    <span>{text}</span>
                </div>
                <button>Learn more</button>   
            </div>
        </>
    )
}