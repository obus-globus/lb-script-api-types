import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TimeSource extends Object{
    get(timeUnit: TimeUnit): number;
}