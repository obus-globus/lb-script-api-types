import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Abstract2DLinearEstimator$DataPair } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Abstract2DLinearEstimator$DataPair.d.ts'
import type { Abstract2DLinearEstimator$LinearFunction } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Abstract2DLinearEstimator$LinearFunction.d.ts'
import type { Estimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator.d.ts'
import type { Estimator$DataBatch } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$DataBatch.d.ts'
export abstract class Abstract2DLinearEstimator<C extends Object | number | string | boolean, TBatch extends Estimator$DataBatch<Abstract2DLinearEstimator$DataPair<C>>, TModel extends Abstract2DLinearEstimator$LinearFunction<C, TBatch>> extends Estimator<C, Abstract2DLinearEstimator$DataPair<C>, TBatch, number, number, TModel> {
    constructor(arg0: number)
    // private initialOutput: number;
}