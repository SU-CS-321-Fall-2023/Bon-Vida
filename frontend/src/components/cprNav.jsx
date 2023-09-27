import React from "react";

export default function CprNav(){
    return(
    <>
        <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" data-bs-toggle="tab" href="#adults" aria-selected="true" role="tab">Adults</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" data-bs-toggle="tab" href="#children" aria-selected="false" role="tab" tabindex="-1">Children</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" href="#infants" aria-selected="false" tabindex="-1" role="tab" id="infants">Infants</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" href="#AED" aria-selected="false" tabindex="-1" role="tab">AED</a>
            </li>
        </ul>
    <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade active show" id="home" role="tabpanel">
            <p>Adults</p>
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel">
            <p>Children</p>
        </div>
        <div className="tab-pane fade" id="infants">
            <p></p>
        </div>
    </div>
    </>
    )
}