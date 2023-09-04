// ======================================================================================
//                                      FUNCTIONS
// ======================================================================================


// ======================================================================================
//                                      Clean Raw Data Functions
// ======================================================================================

// 1.1 Original First Clean Function

export const cleanDataOneFx = (data) => {

    const dataNewOne = {};

    for (const obj of data) {
        let player_name = obj.player_name;
        let position = obj.position;
        let week = obj.week;
        let year = obj.year;
        let games = obj.games;
        let passing_yards = obj.passing_yards;
        let passing_touchdowns = obj.passing_touchdowns;
        let rushing_yards = obj.rushing_yards;
        let rushing_touchdowns = obj.rushing_touchdowns;
        let receiving_yards = obj.receiving_yards;
        let receiving_touchdowns = obj.receiving_touchdowns;
        let receiving_receptions = obj.receiving_receptions;

        if (!dataNewOne[player_name]) {
            dataNewOne[player_name] = {
                player_name,
                position,
                player_stats: {}
            }
        }

        if (position === 'qb') {

        if (week === 'szn') {
            dataNewOne[player_name].player_stats[year] = {games, passing_yards, passing_touchdowns};
        } else {
            if (!dataNewOne[player_name].player_stats[year]) {
                dataNewOne[player_name].player_stats[year] = [];
            }
            dataNewOne[player_name].player_stats[year].push({ passing_yards, passing_touchdowns });
        }
        } else if (position === 'rb') {

            if (week === 'szn') {
                dataNewOne[player_name].player_stats[year] = {games, rushing_yards, rushing_touchdowns};
            } else {
                if (!dataNewOne[player_name].player_stats[year]) {
                    dataNewOne[player_name].player_stats[year] = [];
                }
                dataNewOne[player_name].player_stats[year].push({ rushing_yards, rushing_touchdowns });
            }
        } else if (position === 'te' || position === 'wr') {

            if (week === 'szn') {
                dataNewOne[player_name].player_stats[year] = {games, receiving_yards, receiving_touchdowns, receiving_receptions};
            } else {
                if (!dataNewOne[player_name].player_stats[year]) {
                    dataNewOne[player_name].player_stats[year] = [];
                }
                dataNewOne[player_name].player_stats[year].push({ receiving_yards, receiving_touchdowns, receiving_receptions });
            }
        }
    }

    return dataNewOne;
};

// 1.2 Takes the output of above and creates the 2022 sum total and avergage and 17 game standard

export const cleanDataTwoFx = (data) => {

    const dataNewTwo = {...data};

    Object.values(dataNewTwo).forEach((player) => {
        let position = player.position;

        if (position === 'qb') {

            let totalGames = player.player_stats["2022week"].length;
            let totalYards = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.passing_yards;
            }, 0);
            let totalTouchdowns = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.passing_touchdowns;
            }, 0);
    
            player.player_stats["2022"] = {
                "games": totalGames,
                "passing_yards": totalYards,
                "passing_touchdowns": totalTouchdowns
            }

        } else if (position === 'rb') {

            let totalGames = player.player_stats["2022week"].length;
            let totalYards = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.rushing_yards;
            }, 0);
            let totalTouchdowns = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.rushing_touchdowns;
            }, 0);
    
            player.player_stats["2022"] = {
                "games": totalGames,
                "rushing_yards": totalYards,
                "rushing_touchdowns": totalTouchdowns
            }

        } else if (position === 'te' || position === 'wr' ) {

            let totalGames = player.player_stats["2022week"].length;
            let totalYards = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.receiving_yards;
            }, 0);
            let totalTouchdowns = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.receiving_touchdowns;
            }, 0);
            let totalReceptions = player.player_stats["2022week"].reduce((sum, weekData) => {
                return sum + weekData.receiving_receptions;
            }, 0);
    
            player.player_stats["2022"] = {
                "games": totalGames,
                "receiving_yards": totalYards,
                "receiving_touchdowns": totalTouchdowns,
                "receiving_receptions": totalReceptions
            }
        };
    });
        
    return dataNewTwo;
};

// 1.3 Takes the output of above and creates the avg clean up for 2020/2021

export const cleanDataThreeFx = (data) => {

    const dataNewThree = {...data};

    Object.values(dataNewThree).forEach((player) => {
        let stats2022 = player.player_stats['2022'];
        let stats2020 = player.player_stats['2020'];
        let stats2021 = player.player_stats['2021'];
        let position = player.position;

        if (position === 'qb') {

            stats2020['passing_yards'] = (stats2020['passing_yards'] / stats2020['games']) * 17;
            stats2020['passing_touchdowns'] = (stats2020['passing_touchdowns'] / stats2020['games']) * 17;
            stats2021['passing_yards'] = (stats2021['passing_yards'] / stats2021['games']) * 17;
            stats2021['passing_touchdowns'] = (stats2021['passing_touchdowns'] / stats2021['games']) * 17;
            stats2022['passing_yards'] = (stats2022['passing_yards'] / stats2022['games']) * 17;
            stats2022['passing_touchdowns'] = (stats2022['passing_touchdowns'] / stats2022['games']) * 17;

        } else if (position === 'rb') {

            stats2020['rushing_yards'] = (stats2020['rushing_yards'] / stats2020['games']) * 17;
            stats2020['rushing_touchdowns'] = (stats2020['rushing_touchdowns'] / stats2020['games']) * 17;
            stats2021['rushing_yards'] = (stats2021['rushing_yards'] / stats2021['games']) * 17;
            stats2021['rushing_touchdowns'] = (stats2021['rushing_touchdowns'] / stats2021['games']) * 17;
            stats2022['rushing_yards'] = (stats2022['rushing_yards'] / stats2022['games']) * 17;
            stats2022['rushing_touchdowns'] = (stats2022['rushing_touchdowns'] / stats2022['games']) * 17;

        } else if (position === 'te' || position === 'wr') {

            stats2020['receiving_yards'] = (stats2020['receiving_yards'] / stats2020['games']) * 17;
            stats2020['receiving_touchdowns'] = (stats2020['receiving_touchdowns'] / stats2020['games']) * 17;
            stats2020['receiving_receptions'] = (stats2020['receiving_receptions'] / stats2020['games']) * 17;
            stats2021['receiving_yards'] = (stats2021['receiving_yards'] / stats2021['games']) * 17;
            stats2021['receiving_touchdowns'] = (stats2021['receiving_touchdowns'] / stats2021['games']) * 17;
            stats2021['receiving_receptions'] = (stats2021['receiving_receptions'] / stats2021['games']) * 17;
            stats2022['receiving_yards'] = (stats2022['receiving_yards'] / stats2022['games']) * 17;
            stats2022['receiving_touchdowns'] = (stats2022['receiving_touchdowns'] / stats2022['games']) * 17;
            stats2022['receiving_receptions'] = (stats2022['receiving_receptions'] / stats2022['games']) * 17;
        }
    });

    return dataNewThree;
};

// ======================================================================================
//                                      Prize Pick Functions
// ======================================================================================

// FUNCTION 1: Determining if a good bet based on last year average alone ===================

export const functionOne = (data, prizePickProps) => {

    const propPredictionsFxTwo = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            playerStat = data[propPlayerName].player_stats["2022"].passing_yards;
        } else if (playerPosition === 'rb') {
            playerStat = data[propPlayerName].player_stats["2022"].rushing_yards;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2022"].receiving_yards;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsFxTwo.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsFxTwo.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsFxTwo;
};

// FUNCTION 2: Determining if a good bet based on 2021 ======================================

export const functionTwo = (data, prizePickProps) => {

    const propPredictionsFxTwo = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            playerStat = data[propPlayerName].player_stats["2021"].passing_yards;
        } else if (playerPosition === 'rb') {
            playerStat = data[propPlayerName].player_stats["2021"].rushing_yards;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2021"].receiving_yards;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsFxTwo.push({'name': propPlayerName, 'test': 'szn_2021_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsFxTwo.push({'name': propPlayerName, 'test': 'szn_2021_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsFxTwo;
};

// FUNCTION 3: Determining if a good bet based on 2020 ===================================

export const functionThree = (data, prizePickProps) => {

    const propPredictionsFxThree = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            playerStat = data[propPlayerName].player_stats["2020"].passing_yards;
        } else if (playerPosition === 'rb') {
            playerStat = data[propPlayerName].player_stats["2020"].rushing_yards;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2020"].receiving_yards;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsFxThree.push({'name': propPlayerName, 'test': 'szn_2020_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsFxThree.push({'name': propPlayerName, 'test': 'szn_2020_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsFxThree;
};


// FUNCTION 4: Minus abnormalities is this a good bet ===================================







// ======================================================================================
//                                      Combine Results Into One Array
// ======================================================================================

export const propResults = (fx1, fx2, fx3) => {
    const propArray = [];

    const combinedArray = fx1.concat(fx2, fx3);

    for (const obj of combinedArray) {
        let playerName = obj.name;

        if (!propArray[playerName]) {
            propArray[playerName] = {
                name: playerName,
            }
        }
    }
    return combinedArray;
};