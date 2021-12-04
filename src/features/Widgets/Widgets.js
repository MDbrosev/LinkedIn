import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import "./Widgets.css";

function Widgets() {

    const news = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {news("The new LinkedIn is in!", "Top news - 9854 readers")}
            {news("Best ideas of 2021", "Top news - 821 readers")}
            {news("Can you build react apps?", "Code - 5000 readers")}
            {news("Should you learn redux?", "Code - 215 readers")}
            {news("Top programming languages of 2021", "Code - 7004 readers")}
        </div>
    );
}

export default Widgets
