import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ISODateRecord extends Record {
    constructor(year: number, month: number, day: number)
    // private day: number;
    // private month: number;
    // private year: number;
    day(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    month(): number;
    toString(): string;
    year(): number;
}