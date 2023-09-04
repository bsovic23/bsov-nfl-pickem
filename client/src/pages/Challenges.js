import React, { useState } from 'react';

// Page Imports


// Component Imports


// Data Imports
import { propResultsSortedFinal } from '../data/PropResultsSortedFinal';

const Challenges = () => {
    const allResults = propResultsSortedFinal;

    return (
        <section className='page' id='challenges'>
            <div>
                NAVBAR
            </div>
            <h1>PrizePick Challenges</h1>
            <section>
                <p>
                    Below are all the different prop testing outcomes based on various levels. All players had games
                    dropped in which they played less than 50% of the game due to injury / playoff position
                    set so they didn't play much of the game. Using the averages and standardized for 17 games,
                    that final stat was compared to the PrizePick Prop.
                </p>
                <h2>Below are the test descriptions</h2>
                <li>szn_2022_avg: Based on last seasons data (2022)</li>
                <li>szn_2021_avg: Based on 2 seasons ago data (2021)</li>
                <li>szn_2020_avg: Based on 3 seasons ago data (2020)</li>
                <li>nonInflated2022Games: Based on last season, but does not include games in which did 25% better than season average. If passes this test, an indication that a pretty mediocre/average season will beat the prop rather than needing one or more BIG games</li>
            </section>
            <section>
                FORM FOR CLICKING DIFFERENT
            </section>
            <section>
                <h2>Challenges</h2>
                {Object.keys(allResults).map((propTitle) => {
                    const propGroup = allResults[propTitle];
                    return (
                        <div key={propTitle}>
                            <h3>{propTitle}</h3>
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>Player</th>
                                        <th>Test</th>
                                        <th>Prop Prediction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {propGroup.Results.map((result, index) => (
                                        <tr key={index}>
                                            <td>{result.Player}</td>
                                            <td>{result.Test}</td>
                                            <td>{result["Prop Prediction"]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </section>
            <section>
                FOOTER
            </section>
        </section>
    );
};

export default Challenges;
