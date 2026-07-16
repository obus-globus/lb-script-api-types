import type { Object } from '../../java/lang/Object.d.ts'
import type { DurationUnit } from '../../kotlin/time/DurationUnit.d.ts'
export class DurationKt extends Object {
    static MAX_MILLIS: number;
    static MAX_NANOS: number;
    static MICROS_IN_MILLIS: number;
    static MILLIS_IN_DAY: number;
    static MILLIS_IN_HOUR: number;
    static MILLIS_IN_MINUTE: number;
    static MILLIS_IN_SECOND: number;
    static NANOS_IN_MICROS: number;
    static NANOS_IN_MILLIS: number;
    static toDuration(paramarg0: number, paramarg1: DurationUnit): number;
}