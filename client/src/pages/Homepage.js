import React from 'react';

// Player Data
import { playerDataRaw } from '../data/PlayerDataRaw';
import { playerData } from '../data/PlayerDataClean';

// PrizePicks Prop Data
import { propsYards } from '../data/PropDataYards';
import { propsTds } from '../data/PropDataTds';
import { propsRecs } from '../data/PropDataReceptions';

// Yards Functions
import { cleanDataOneFx, cleanDataTwoFx, cleanDataThreeFx, functionOne, functionTwo, functionThree, functionFour, propResults, sortPropResults } from '../functionsYards';

// TDs Functions
import { tdFunctionOne, tdFunctionTwo, tdFunctionThree } from '../functionsTds';

// Receptions Functions
import { receptionsFunctionOne, receptionsFunctionTwo, receptionsFunctionThree } from '../functionsReceptions';


const Homepage = () => {

    // Format Raw data and then copy clean (cleanThree) back into database
    const cleanOne = cleanDataOneFx(playerDataRaw);
    const cleanTwo = cleanDataTwoFx(cleanOne);
    const cleanThree = cleanDataThreeFx(cleanTwo);

    // Run all the individual Variations to assess if wouldve beat prop for yards
    const test1 = functionOne(playerData, propsYards);
    const test2 = functionTwo(playerData, propsYards);
    const test3 = functionThree(playerData, propsYards);
    const test4 = functionFour(playerData, propsYards);

    // Run all the individual Variations to assess if wouldve beat prop for touchdowns
    const td1 = tdFunctionOne(playerData, propsTds);
    const td2 = tdFunctionTwo(playerData, propsTds);
    const td3 = tdFunctionThree(playerData, propsTds);

    // Run all the individual Variations to assess if wouldve beat prop for receptions
    const rec1 = receptionsFunctionOne(playerData, propsRecs);
    const rec2 = receptionsFunctionTwo(playerData, propsRecs);
    const rec3 = receptionsFunctionThree(playerData, propsRecs);

    // If have time create and run a trend function =======



    // Combine All the Prop results above into one and then sort the one which prints to the page
    // Copy and then paste into PropResultsSortedFinal

    const propResultsOutput = propResults(test1, test2, test3, test4, td1, td2, td3, rec1, rec2, rec3);
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