import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export interface Estimator$DataBatch<TBatchPoint extends unknown> extends Object{
    addDataPoint(arg0: TBatchPoint): void;
    reset(): void;
}