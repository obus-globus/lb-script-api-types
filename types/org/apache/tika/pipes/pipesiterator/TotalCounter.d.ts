import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TotalCountResult } from '../../../../../org/apache/tika/pipes/pipesiterator/TotalCountResult.d.ts'
export interface TotalCounter extends Object{
    getTotalCount(): TotalCountResult;
    startTotalCount(): void;
}