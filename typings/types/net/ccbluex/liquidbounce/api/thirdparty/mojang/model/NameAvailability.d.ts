import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NameAvailability extends Record {
    constructor(status: string)
    // private status: string;
    /*not mapped: */ status(): string;
    component1(): string;
    copy(status: string): NameAvailability;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}