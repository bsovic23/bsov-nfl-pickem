import React from 'react';

import { cleanDataOneFx, cleanDataTwoFx, cleanDataThreeFx, functionOne, functionTwo, functionThree, propResults } from '../functions';
import { playerDataRaw } from '../data/PlayerDataRaw';
import { props } from '../data/PropData';
import { playerData } from '../data/playerDataClean';

const Homepage = () => {

    // Format Raw data and then copy clean back into database
    const cleanOne = cleanDataOneFx(playerDataRaw);
    const cleanTwo = cleanDataTwoFx(cleanOne);
    const cleanThree = cleanDataThreeFx(cleanTwo);

    // Prop Test
    const test1 = functionOne(playerData, props);
    const test2 = functionTwo(playerData, props);
    const test3 = functionThree(playerData, props);

    // Combine Prop Tests into one 
    const propResultsOutput = propResults(test1, test2, test3);

    return(
        <section class='page' id='homepage'>
            <div>
                <h1>COMBINED ARRAY RESULTS</h1>
                {propResultsOutput ?
                    (<pre>{JSON.stringify(propResultsOutput, null, 2)}</pre>)
                :
                (<div>
                    No data
                </div>)
                }
            </div>
             <div>
                <h1>FUNCTION ONE</h1>
                {test1 ?
                    (<pre>{JSON.stringify(test1, null, 2)}</pre>)
                :
                (<div>
                    No data
                </div>)
                }
            </div>
            <div>
                <h1>FUNCTION TWO</h1>
                {test2 ?
                    (<pre>{JSON.stringify(test2, null, 2)}</pre>)
                :
                (<div>
                    No data
                </div>)
                }
            </div>
            <div>
                <h1>FUNCTION THREE</h1>
                {test3 ?
                    (<pre>{JSON.stringify(test3, null, 2)}</pre>)
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