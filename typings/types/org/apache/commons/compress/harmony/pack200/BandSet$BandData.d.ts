import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BandSet } from '../../../../../../org/apache/commons/compress/harmony/pack200/BandSet.d.ts'
export class BandSet$BandData extends Object {
    constructor(null_: BandSet, arg1: number[])
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