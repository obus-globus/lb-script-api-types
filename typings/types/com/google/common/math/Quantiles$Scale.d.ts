import type { Quantiles$ScaleAndIndex } from '../../../../com/google/common/math/Quantiles$ScaleAndIndex.d.ts'
import type { Quantiles$ScaleAndIndexes } from '../../../../com/google/common/math/Quantiles$ScaleAndIndexes.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Quantiles$Scale extends Object {
    constructor(arg0: number, arg1: any)
    // private scale: number;
    index(index: number): Quantiles$ScaleAndIndex;
    indexes(...indexes: number[]): Quantiles$ScaleAndIndexes;
    indexes(indexes: number[]): Quantiles$ScaleAndIndexes;
}