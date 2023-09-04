import React, { useState } from 'react';

// Page Imports


// Component Imports


// Function and Data Imports
import { playerData } from '../data/playerDataClean';
import { props } from '../data/PropData';

import { functionOne } from '../functions';

export const Challenges = () => {

    const prop2022Results = functionOne(playerData, props);
    console.log(prop2022Results);

    return(
        <section class='page' id='challenges'>
            <div>
                navbar here
            </div>
            <h1>PrizePick Challenges</h1>
            <section>
                <p>
                    Below are all the challenges based on
                    last seasons stats. All players had games
                    dropped in which they played less than 50% 
                    of the game due to injury / playoff position 
                    set so didnt play much of the game. Using the
                    averages and standardized for 17 games that final
                    stat was compared to the PrizePick Prop
                </p>
                <p>
                    If you would like to just view by different individual 
                    tests, click the challenge name below
                </p>
            </section>
            <section>
                FORM HERE FOR CLICKING THE DIFFERENT CHALLENGES
            </section>
            <section>
                <h2>Challenges</h2>
                <div>
                    <h3>Passing Yards Total</h3>
                    {prop2022Results ? (
                        <div>
                        {prop2022Results.map((player, index) => (
                            <div key={index}>
                                <p>
                                    Player Name: {player.name}
                                    <br />
                                    2022 Season vs 2023 PrizePicks Prop: {player["Prop Prediction"]}
                                </p>
                            </div>
                        ))}
                        </div>
                    ) : (
                        <div>
                            NO RESULTS FOR THIS CHALLENGE
                        </div>
                    )}
                </div>
            </section>
            <section>
                FOOTER HERE
            </section>
        </section>
    )
};

export default Challenges;
