import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface Estimator$DataBatch<TBatchPoint extends Object | number | string | boolean> extends Object{
    addDataPoint(arg0: TBatchPoint): void;
    reset(): void;
}