// ------------------------------- NODE MODULES -------------------------------

// ------------------------------ CUSTOM MODULES ------------------------------

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const day1A = (input: Number[]): Number => {
    let increases = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            increases++
        }
    }
    
    return increases;
};

export const day1B = (input: number[]): number => {
    let increases = 0;
    let previousSum = input[2] + input[1] +input[0];
    
    for (let i = 3; i < input.length; i++) {
        const sum = input[i-2] + input[i-1] +input[i];

        if (sum > previousSum) {
            increases++
        }

        previousSum = sum;
    };

    return increases;
}