import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BandSet$BandData extends Object {
    constructor(null_: BandSet$BandData, arg1: number[])
    // private averageAbsoluteDelta: number;
    // private averageAbsoluteValue: number;
    // private band: number[];
    // private deltaIsAscending: number;
    // private distinctValues: { [key: number]: number };
    // private largest: number;
    // private largestDelta: number;
    // private smallDeltaCount: number;
    // private smallest: number;
    // private smallestDelta: number;
    anyNegatives(): boolean;
    mainlyPositiveDeltas(): boolean;
    mainlySmallDeltas(): boolean;
    numDistinctValues(): number;
    wellCorrelated(): boolean;
}