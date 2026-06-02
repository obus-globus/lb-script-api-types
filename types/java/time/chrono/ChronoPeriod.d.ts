import type { Chronology } from '../../../java/time/chrono/Chronology.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { TemporalAmount } from '../../../java/time/temporal/TemporalAmount.d.ts'
import type { TemporalUnit } from '../../../java/time/temporal/TemporalUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChronoPeriod extends TemporalAmount, Object{
    addTo(arg0: Temporal): Temporal;
    get(arg0: TemporalUnit): number;
    getChronology(): Chronology;
    getUnits(): TemporalUnit[];
    isNegative(): boolean;
    isZero(): boolean;
    minus(arg0: TemporalAmount): ChronoPeriod;
    multipliedBy(arg0: number): ChronoPeriod;
    negated(): ChronoPeriod;
    normalized(): ChronoPeriod;
    plus(arg0: TemporalAmount): ChronoPeriod;
    subtractFrom(arg0: Temporal): Temporal;
}