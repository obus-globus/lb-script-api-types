import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SubVersionRange extends Record {
    constructor(baseVersion: string, rangeFrom: number, rangeTo: number)
    // private baseVersion: string;
    // private rangeFrom: number;
    // private rangeTo: number;
    baseVersion(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rangeFrom(): number;
    rangeTo(): number;
    toString(): string;
}