import type { Quantiles$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Quantiles$ScaleAndIndex extends Object {
    private constructor(scale: number, index: number)
    constructor(arg0: number, arg1: number, arg2: Quantiles$1)
    // private index: number;
    // private scale: number;
    compute(dataset: Number[]): number;
    compute(dataset: number[]): number;
    computeInPlace(dataset: number[]): number;
}