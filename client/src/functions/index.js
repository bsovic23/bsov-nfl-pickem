// ======================================================================================
// FUNCTIONS
// ======================================================================================


// ---------------------------- Clean Raw Data Functions -------------------------------


// TO DO BRIT: NEED TO CLEAN THE 2020, 2021 AVERAGES TO MAKE THE TOTAL YARDS TOTAL BASED ON 17 GAMES (total yards / games played * 17)
export const cleanDataFx = (data) => {
    const cleanData = {};

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

        if (!cleanData[player_name]) {
            cleanData[player_name] = {
                player_name,
                position,
                player_stats: {}
            }
        }

        if (position === 'qb') {

        if (week === 'szn') {
            cleanData[player_name].player_stats[year] = {games, passing_yards, passing_touchdowns};
        } else {
            if (!cleanData[player_name].player_stats[year]) {
                cleanData[player_name].player_stats[year] = [];
            }
            cleanData[player_name].player_stats[year].push({ passing_yards, passing_touchdowns });
        }
        } else if (position === 'rb') {

            if (week === 'szn') {
                cleanData[player_name].player_stats[year] = {games, rushing_yards, rushing_touchdowns};
            } else {
                if (!cleanData[player_name].player_stats[year]) {
                    cleanData[player_name].player_stats[year] = [];
                }
                cleanData[player_name].player_stats[year].push({ rushing_yards, rushing_touchdowns });
            }
        } else if (position === 'te' || position === 'wr') {

            if (week === 'szn') {
                cleanData[player_name].player_stats[year] = {games, receiving_yards, receiving_touchdowns, receiving_receptions};
            } else {
                if (!cleanData[player_name].player_stats[year]) {
                    cleanData[player_name].player_stats[year] = [];
                }
                cleanData[player_name].player_stats[year].push({ receiving_yards, receiving_touchdowns, receiving_receptions });
            }
        }
    }

    return cleanData;
};




// ---------------------------- Prize Pick Functions ---------------------------------------------------------------

// FUNCTION 1: Determining if a good bet based on last year average alone ===================

// COPY FUNCTIONS BELOW AND USE FOR 2022 ONCE MAKE THE AVG CLENAUP ABOVE ^^^

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
            propPredictionsFxTwo.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
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