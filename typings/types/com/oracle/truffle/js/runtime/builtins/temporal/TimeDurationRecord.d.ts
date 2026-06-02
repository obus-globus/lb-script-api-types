import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TimeDurationRecord extends Record {
    // private days: number;
    // private hours: number;
    // private microseconds: number;
    // private milliseconds: number;
    // private minutes: number;
    // private nanoseconds: number;
    // private seconds: number;
    days(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hours(): number;
    microseconds(): number;
    milliseconds(): number;
    minutes(): number;
    nanoseconds(): number;
    seconds(): number;
    toString(): string;
}