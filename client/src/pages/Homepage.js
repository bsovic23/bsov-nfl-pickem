import React from 'react';

import { cleanDataOneFx, cleanDataTwoFx, cleanDataThreeFx, functionOne, functionTwo, functionThree, functionFour, propResults, sortPropResults } from '../functions';
import { playerDataRaw } from '../data/PlayerDataRaw';
import { props } from '../data/PropData';
import { playerData } from '../data/playerDataClean';
import { propResultsAll } from '../data/PropData';

const Homepage = () => {

    // Format Raw data and then copy clean (cleanThree) back into database
    const cleanOne = cleanDataOneFx(playerDataRaw);
    const cleanTwo = cleanDataTwoFx(cleanOne);
    const cleanThree = cleanDataThreeFx(cleanTwo);

    // Run all the individual Variations to assess if wouldve beat prop
    const test1 = functionOne(playerData, props);
    const test2 = functionTwo(playerData, props);
    const test3 = functionThree(playerData, props);
    const test4 = functionFour(playerData, props);

    // Combine All the Prop results above into one and then sort the one
    const propResultsOutput = propResults(test1, test2, test3, test4);
    console.log(propResultsOutput);
    const propResultsSorted = sortPropResults(propResultsOutput);
    console.log(propResultsSorted);

    return(
        <section class='page' id='homepage'>
            <div>
                <h1>COMBINED ARRAY RESULTS</h1>
                {propResultsSorted ?
                    (<pre>{JSON.stringify(propResultsSorted, null, 2)}</pre>)
                :
                (<div>
                    No data
                </div>)
                }
            </div>
        </section>
    )
};

export default Homepage;