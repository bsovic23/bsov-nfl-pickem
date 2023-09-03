import React from 'react';

import { cleanDataFx, functionOne, functionTwo, functionThree } from '../functions';
import { playerDataRaw } from '../data/PlayerDataRaw';
import { props } from '../data/PropData';
import { playerData } from '../data/playerData';

const Homepage = () => {

    // Format Raw data and then copy clean back into database
    const importCleanData = cleanDataFx(playerDataRaw);

    const test2 = functionTwo(playerData, props);
    const test3 = functionThree(playerData, props);


    return(
        <section class='page' id='homepage'>
             <div>
                {importCleanData ?
                    (<pre>{JSON.stringify(importCleanData, null, 2)}</pre>)
                :
                (<div>
                    No data
                </div>)
                }
            </div>
            <div>
                {test2 ?
                    (<pre>{JSON.stringify(test2, null, 2)}</pre>)
                :
                (<div>
                    No data
                </div>)
                }
            </div>
            <div>
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