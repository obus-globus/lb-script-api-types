import type { Quantiles$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Quantiles$ScaleAndIndexes extends Object {
    private constructor(scale: number, indexes: number[])
    constructor(arg0: number, arg1: number[], arg2: Quantiles$1)
    // private indexes: number[];
    // private scale: number;
    compute(dataset: Number[]): { [key: number]: number };
    compute(dataset: number[]): { [key: number]: number };
    computeInPlace(dataset: number[]): { [key: number]: number };
}