import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Quantiles$ScaleAndIndex extends Object {
    private constructor(scale: number, index: number)
    // private index: number;
    // private scale: number;
    compute(dataset: Number[]): number;
    compute(dataset: number[]): number;
    computeInPlace(dataset: number[]): number;
}