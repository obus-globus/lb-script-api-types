import type { Quantiles$Scale } from '../../../../com/google/common/math/Quantiles$Scale.d.ts'
import type { Quantiles$ScaleAndIndex } from '../../../../com/google/common/math/Quantiles$ScaleAndIndex.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Quantiles extends Object {
    static median(): Quantiles$ScaleAndIndex;
    static percentiles(): Quantiles$Scale;
    static quartiles(): Quantiles$Scale;
    static scale(paramscale: number): Quantiles$Scale;
    constructor()
}