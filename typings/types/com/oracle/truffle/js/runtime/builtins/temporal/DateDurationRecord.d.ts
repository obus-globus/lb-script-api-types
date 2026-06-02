import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DateDurationRecord extends Record {
    // private days: number;
    // private months: number;
    // private weeks: number;
    // private years: number;
    days(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    months(): number;
    toString(): string;
    weeks(): number;
    years(): number;
}