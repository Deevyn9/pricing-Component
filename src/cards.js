import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className={props.className}>
                <h3>{props.Package}</h3>
                <h1 className={props.priceClass}>{props.Price}</h1>
                <hr />
                <p>{props.Capacity}</p>
                <hr />
                <p>{props.Users}</p>
                <hr />
                <p>{props.SendAmount}</p>
                <hr />
                <div className={props.moreClass}>
                    LEARN MORE
                </div>
            </div>            
        </div>
    )
}