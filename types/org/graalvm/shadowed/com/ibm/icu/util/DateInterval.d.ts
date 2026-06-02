import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DateInterval extends Object implements Serializable {
    constructor(from: number, to: number)
    readonly fromDate: number;
    readonly toDate: number;
    equals(a: Object | null): boolean;
    getFromDate(): number;
    getToDate(): number;
    hashCode(): number;
    toString(): string;
}