import React from "react";

export default function Header() {
    return (
        <div>
        <header>
        <div className="header">
            <h1 className="pricing">Our Pricing</h1>
            <div className="subscribe">
                <p className="head-annually">Annually</p>
                <label className="switch">
                    <input type="checkbox" id="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p className="head-monthly">Monthly</p>
            </div>
        </div>
        </header>
        </div>
    )
}