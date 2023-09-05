// FUNCTION 1: Determining if a good bet based on last year average alone ===================

export const tdFunctionOne = (data, prizePickProps) => {

    const propPredictionsTdOne = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            playerStat = data[propPlayerName].player_stats["2022"].passing_touchdowns;
        } else if (playerPosition === 'rb') {
            playerStat = data[propPlayerName].player_stats["2022"].rushing_touchdowns;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2022"].receiving_touchdowns;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsTdOne.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsTdOne.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsTdOne;
};

// FUNCTION 2: Determine if good bet vs 2021 stat ===================

export const tdFunctionTwo = (data, prizePickProps) => {

    const propPredictionsTdTwo = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            playerStat = data[propPlayerName].player_stats["2021"].passing_touchdowns;
        } else if (playerPosition === 'rb') {
            playerStat = data[propPlayerName].player_stats["2021"].rushing_touchdowns;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2021"].receiving_touchdowns;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsTdTwo.push({'name': propPlayerName, 'test': 'szn_2021_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsTdTwo.push({'name': propPlayerName, 'test': 'szn_2021_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsTdTwo;
};


// FUNCTION 3: Determine if good bet vs 2020 stat ===================

export const tdFunctionThree = (data, prizePickProps) => {

    const propPredictionsTdThree = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            playerStat = data[propPlayerName].player_stats["2020"].passing_touchdowns;
        } else if (playerPosition === 'rb') {
            playerStat = data[propPlayerName].player_stats["2020"].rushing_touchdowns;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2020"].receiving_touchdowns;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsTdThree.push({'name': propPlayerName, 'test': 'szn_2020_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsTdThree.push({'name': propPlayerName, 'test': 'szn_2020_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsTdThree;
};

// ====================================================================================================================