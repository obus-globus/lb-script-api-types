import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ISODateTimeRecord extends Record {
    // private day: number;
    // private hour: number;
    // private microsecond: number;
    // private millisecond: number;
    // private minute: number;
    // private month: number;
    // private nanosecond: number;
    // private second: number;
    // private year: number;
    day(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hour(): number;
    microsecond(): number;
    millisecond(): number;
    minute(): number;
    month(): number;
    nanosecond(): number;
    second(): number;
    toString(): string;
    year(): number;
}