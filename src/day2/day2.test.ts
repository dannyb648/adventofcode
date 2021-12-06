// ------------------------------- NODE MODULES -------------------------------

// ------------------------------ CUSTOM MODULES ------------------------------

import { day2A } from './day2';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

describe("Day 2", () => {
    const input = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2']

    it("Puzzle A", () => {

        const result = day2A(input);

        expect(result).toEqual(150);
    });

    // it("Puzzle B", () => {
    //     const result = day2B(input);

    //     expect(result).toEqual(5);
    // })
});
