import type { Quantiles$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Quantiles$ScaleAndIndex } from '../../../../com/google/common/math/Quantiles$ScaleAndIndex.d.ts'
import type { Quantiles$ScaleAndIndexes } from '../../../../com/google/common/math/Quantiles$ScaleAndIndexes.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Quantiles$Scale extends Object {
    private constructor(scale: number)
    constructor(arg0: number, arg1: Quantiles$1)
    // private scale: number;
    index(index: number): Quantiles$ScaleAndIndex;
    indexes(indexes: number[]): Quantiles$ScaleAndIndexes;
}