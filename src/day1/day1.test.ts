// ------------------------------- NODE MODULES -------------------------------

// ------------------------------ CUSTOM MODULES ------------------------------

import { day1A, day1B } from './day1';

// -------------------------------- VARIABLES ---------------------------------

// ----------------------------- FILE DEFINITION ------------------------------

describe("Day 1", () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    it("Puzzle A", () => {

        const result = day1A(input);

        expect(result).toEqual(7);
    });

    it("Puzzle B", () => {
        const result = day1B(input);

        expect(result).toEqual(5);
    })
});

