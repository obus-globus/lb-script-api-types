import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Average1DEstimator$Value } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Average1DEstimator$Value.d.ts'
import type { Estimator$DataBatch } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$DataBatch.d.ts'
export class Average1DEstimator$ValueBatch<BatchCategory extends Object | number | string | boolean> extends Object implements Estimator$DataBatch<Average1DEstimator$Value<BatchCategory>> {
    constructor()
    // private count: number;
    // private valueSum: number;
    addDataPoint(arg0: Average1DEstimator$Value<BatchCategory>): void;
    getAverage(): number;
    reset(): void;
}