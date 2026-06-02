import type { Object } from '../../../../java/lang/Object.d.ts'
export class RunningTrimmedMean extends Object {
    constructor(maxCount: number)
    // private count: number;
    // private cursor: number;
    // private values: number[];
    registerValueAndGetMean(value: number): number;
}