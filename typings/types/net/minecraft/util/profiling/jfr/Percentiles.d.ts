import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Quantiles$ScaleAndIndexes } from '../../../../../com/google/common/math/Quantiles$ScaleAndIndexes.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Percentiles extends Object {
    static DEFAULT_INDEXES: Quantiles$ScaleAndIndexes;
    static evaluate(paramdataset: number[]): JavaMap<number, number>;
    private constructor()
}