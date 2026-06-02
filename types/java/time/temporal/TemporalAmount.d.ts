import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TemporalAmount extends Object{
    addTo(arg0: Temporal): Temporal;
    get(arg0: TemporalUnit): number;
    getUnits(): TemporalUnit[];
    subtractFrom(arg0: Temporal): Temporal;
}