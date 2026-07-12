import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Quantiles$ScaleAndIndexes extends Object {
    constructor(arg0: number, arg1: number[], arg2: any)
    // private indexes: number[];
    // private scale: number;
    compute(dataset: Number[]): { [key: number]: number };
    compute(...dataset: number[]): { [key: number]: number };
    computeInPlace(...dataset: number[]): { [key: number]: number };
}