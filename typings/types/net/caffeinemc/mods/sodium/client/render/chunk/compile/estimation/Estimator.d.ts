import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Estimator$DataBatch } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$DataBatch.d.ts'
import type { Estimator$DataPoint } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$DataPoint.d.ts'
import type { Estimator$Model } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation/Estimator$Model.d.ts'
export abstract class Estimator<TCategory extends Object | number | string | boolean, TPoint extends Estimator$DataPoint<TCategory>, TBatch extends Estimator$DataBatch<TPoint>, TInput extends Object | number | string | boolean, TOutput extends Object | number | string | boolean, TModel extends Estimator$Model<TInput, TOutput, TBatch>> extends Object {
    constructor()
    // private batches: Map<TCategory, TBatch>;
    // private models: Map<TCategory, TModel>;
    addData(arg0: TPoint): void;
    createMap(): Map<TCategory, T>;
    createNewDataBatch(): TBatch;
    createNewModel(): TModel;
    // private ensureModel(arg0: TCategory): TModel;
    predict(arg0: TCategory, arg1: TInput): TOutput;
    toString(arg0: TCategory): string;
    updateModels(): void;
}