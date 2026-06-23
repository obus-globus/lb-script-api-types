import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Average1DEstimator$Average } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator$Average.d.ts'
import type { Average1DEstimator$Value } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator$Value.d.ts'
import type { Average1DEstimator$ValueBatch } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator$ValueBatch.d.ts'
import type { Estimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator.d.ts'
export abstract class Average1DEstimator<C extends unknown> extends Estimator<C, Average1DEstimator$Value<C>, Average1DEstimator$ValueBatch<C>, void, number, Average1DEstimator$Average<C>> {
    constructor(arg0: number, arg1: number)
    // private initialEstimate: number;
    // private newDataRatio: number;
    createNewDataBatch(): Average1DEstimator$ValueBatch<C>;
    createNewModel(): Average1DEstimator$Average<C>;
    predict(arg0: C): number;
    predict(arg0: C, arg1: void): number;
}