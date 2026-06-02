import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Estimator$DataPoint } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$DataPoint.d.ts'
export interface Average1DEstimator$Value<PointCategory extends Object | number | string | boolean> extends Object, Estimator$DataPoint<PointCategory>{
    value(): number;
}