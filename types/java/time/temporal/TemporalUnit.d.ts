import type { Duration } from '../../../java/time/Duration.d.ts'
import type { Temporal } from '../../../java/time/temporal/Temporal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TemporalUnit extends Object{
    addTo<R extends Temporal>(arg0: R, arg1: number): R;
    between(arg0: Temporal, arg1: Temporal): number;
    getDuration(): Duration;
    isDateBased(): boolean;
    isDurationEstimated(): boolean;
    isSupportedBy(arg0: Temporal): boolean;
    isTimeBased(): boolean;
}