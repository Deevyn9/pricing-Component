import React from "react";
import Card from "./cards";
import Header from "./header";
import "./index.css"
import data from "./data"

export default function App() {
    const cardAnnually = data.map(item => {
        return (
            <Card
                    className = {item.className}
                    Package={item.Package}
                    Price={item.Price}
                    priceClass={item.priceClass}
                    Capacity={item.Capacity}
                    Users = {item.Users}
                    SendAmount={item.SendAmount}
                    moreClass = {item.moreClass}
                />
        )
    })

    return (
        <div>
            <Header />
            <div className="cards">
               {cardAnnually}
            </div>
        </div>
    )
}