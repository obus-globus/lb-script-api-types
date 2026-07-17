import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Quantiles$ScaleAndIndexes extends Object {
    private constructor(scale: number, indexes: number[])
    // private indexes: number[];
    // private scale: number;
    compute(dataset: Number[]): JavaMap<number, number>;
    compute(...dataset: number[]): JavaMap<number, number>;
    computeInPlace(...dataset: number[]): JavaMap<number, number>;
}