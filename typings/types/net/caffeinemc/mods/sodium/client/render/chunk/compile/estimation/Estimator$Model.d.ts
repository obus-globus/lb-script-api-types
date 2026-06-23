import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface Estimator$Model<TModelInput extends unknown, TModelOutput extends unknown, TModelBatch extends unknown> extends Object{
    predict(arg0: TModelInput): TModelOutput;
    update(arg0: TModelBatch): void;
}