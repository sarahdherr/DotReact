import * as React from "react";

interface ScoreProps { score : number }

export const Score = (props : ScoreProps ) =>
    <div className="listitem-score">
        <p className="listitem-score-text">{props.score > 9 ? props.score : `0${props.score}`}</p>
    </div>