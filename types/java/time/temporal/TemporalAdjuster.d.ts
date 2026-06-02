import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TemporalAdjuster extends Object{
    adjustInto(arg0: Temporal): Temporal;
}