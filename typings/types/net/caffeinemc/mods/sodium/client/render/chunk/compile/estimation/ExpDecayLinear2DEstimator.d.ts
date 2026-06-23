import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Abstract2DLinearEstimator } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Abstract2DLinearEstimator.d.ts'
import type { ExpDecayLinear2DEstimator$ExpDecayLinearFunction } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/ExpDecayLinear2DEstimator$ExpDecayLinearFunction.d.ts'
export abstract class ExpDecayLinear2DEstimator<C extends unknown> extends Abstract2DLinearEstimator<C, C[], ExpDecayLinear2DEstimator$ExpDecayLinearFunction<C>> {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private initialSampleTarget: number;
    // private minBatchSize: number;
    // private newDataRatio: number;
    createNewDataBatch(): C[];
    createNewModel(): ExpDecayLinear2DEstimator$ExpDecayLinearFunction<C>;
}