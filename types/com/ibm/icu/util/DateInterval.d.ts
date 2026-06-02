import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateInterval extends Object implements Serializable {
    constructor(arg0: number, arg1: number)
    readonly fromDate: number;
    readonly toDate: number;
    equals(arg0: Object | null): boolean;
    getFromDate(): number;
    getToDate(): number;
    hashCode(): number;
    toString(): string;
}