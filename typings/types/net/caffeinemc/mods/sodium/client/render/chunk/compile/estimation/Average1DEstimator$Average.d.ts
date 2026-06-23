import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Average1DEstimator$ValueBatch } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator$ValueBatch.d.ts'
import type { Estimator$Model } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$Model.d.ts'
export class Average1DEstimator$Average<C extends unknown> extends Object implements Estimator$Model<void, number, Average1DEstimator$ValueBatch<C>> {
    constructor(arg0: number, arg1: number)
    // private average: number;
    // private hasRealData: boolean;
    // private newDataRatio: number;
    predict(arg0: void): number;
    toString(): string;
    update(arg0: Average1DEstimator$ValueBatch<C>): void;
}