// ------------------------------- NODE MODULES -------------------------------

// ------------------------------ CUSTOM MODULES ------------------------------

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

export const day2A = (input: string[]): number => {
    let depth: number = 0;
    let horizontal: number = 0;

    for (let i = 0; i < input.length; i++) {
        let command =  input[i].split(' ')[0];
        let increment = +input[i].split(' ')[1];
        
        if (command === 'forward') {
            horizontal = horizontal + increment;
        } else if (command === 'down') {
            depth = depth + increment;
        } else if (command === 'up') {
            depth = depth - increment;
        }
    }

    return depth * horizontal
};