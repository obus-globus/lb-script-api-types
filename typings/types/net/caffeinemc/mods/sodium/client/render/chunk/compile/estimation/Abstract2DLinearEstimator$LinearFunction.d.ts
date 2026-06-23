import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Abstract2DLinearEstimator$DataPair } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Abstract2DLinearEstimator$DataPair.d.ts'
import type { Estimator$DataBatch } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$DataBatch.d.ts'
import type { Estimator$Model } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$Model.d.ts'
export abstract class Abstract2DLinearEstimator$LinearFunction<C extends unknown, TBatch extends Estimator$DataBatch<Abstract2DLinearEstimator$DataPair<C>>> extends Object implements Estimator$Model<number, number, TBatch> {
    constructor(arg0: number)
    // private gatheredSamples: number;
    // private initialOutput: number;
    // private slope: number;
    // private yIntercept: number;
    predict(arg0: number): number;
    toString(): string;
}