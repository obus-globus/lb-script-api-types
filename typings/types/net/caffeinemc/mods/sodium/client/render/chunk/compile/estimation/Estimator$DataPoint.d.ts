import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface Estimator$DataPoint<TPointCategory extends Object | number | string | boolean> extends Object{
    category(): TPointCategory;
}