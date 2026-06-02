import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface Estimator$Model<TModelInput extends Object | number | string | boolean, TModelOutput extends Object | number | string | boolean, TModelBatch extends Object | number | string | boolean> extends Object{
    predict(arg0: TModelInput): TModelOutput;
    update(arg0: TModelBatch): void;
}