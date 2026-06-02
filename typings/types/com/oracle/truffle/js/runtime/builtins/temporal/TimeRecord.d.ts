import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TimeRecord extends Record {
    // private days: number;
    // private hour: number;
    // private microsecond: number;
    // private millisecond: number;
    // private minute: number;
    // private nanosecond: number;
    // private second: number;
    days(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hour(): number;
    microsecond(): number;
    millisecond(): number;
    minute(): number;
    nanosecond(): number;
    second(): number;
    toString(): string;
}