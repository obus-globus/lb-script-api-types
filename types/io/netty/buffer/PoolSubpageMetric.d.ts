import type { Object } from '../../../java/lang/Object.d.ts'
export interface PoolSubpageMetric extends Object{
    elementSize(): number;
    maxNumElements(): number;
    numAvailable(): number;
    pageSize(): number;
}