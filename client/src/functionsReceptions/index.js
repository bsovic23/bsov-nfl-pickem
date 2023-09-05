// FUNCTION 1: Determining if a good bet based on last year average alone ===================

export const receptionsFunctionOne = (data, prizePickProps) => {

    const propPredictionsRecOne = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            null;
        } else if (playerPosition === 'rb') {
            null;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2022"].receiving_receptions;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsRecOne.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsRecOne.push({'name': propPlayerName, 'test': 'szn_2022_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsRecOne;
};

// FUNCTION 2: Determine if good bet vs 2021 stat ===================

export const receptionsFunctionTwo = (data, prizePickProps) => {

    const propPredictionsRecTwo = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            null;
        } else if (playerPosition === 'rb') {
            null;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2021"].receiving_receptions;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsRecTwo.push({'name': propPlayerName, 'test': 'szn_2021_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsRecTwo.push({'name': propPlayerName, 'test': 'szn_2021_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsRecTwo;
};


// FUNCTION 3: Determine if good bet vs 2020 stat ===================

export const receptionsFunctionThree = (data, prizePickProps) => {

    const propPredictionsRecThree = [];

    Object.values(prizePickProps).forEach((prop) => {

        // Prop Variables -- Will stay the same for every function

        const propPlayerName = prop.prop_name;
        const propTitle = prop.prop_title;
        const propStat = prop.prop_stat;

        // Player Variables - Will change based on what prop the function is testing for

        const playerPosition = data[propPlayerName].position;
        let playerStat = '';

        if (playerPosition === 'qb') {
            null;
        } else if (playerPosition === 'rb') {
            null;
        } else if (playerPosition === 'wr' || playerPosition === 'te') {
            playerStat = data[propPlayerName].player_stats["2020"].receiving_receptions;
        } else return `PLAYER POSITION ERROR`;

        // Determining if the player beat the prop

        if (playerStat > propStat) {
            propPredictionsRecThree.push({'name': propPlayerName, 'test': 'szn_2020_avg', 'Prop Title': propTitle, 'Prop Prediction': 'Yes Beat Prop' });
        } else if (playerStat < propStat) {
            propPredictionsRecThree.push({'name': propPlayerName, 'test': 'szn_2020_avg', 'Prop Title': propTitle, 'Prop Prediction': 'No Beat Prop' });
        } else console.log('Error');
    });

    return propPredictionsRecThree;
};

// ====================================================================================================================