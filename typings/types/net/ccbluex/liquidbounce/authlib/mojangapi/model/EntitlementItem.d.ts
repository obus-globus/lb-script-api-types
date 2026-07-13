import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntitlementItem extends Record {
    constructor(name: string)
    // private name: string;
    /*not mapped: */ name(): string;
    component1(): string;
    copy(name: string): EntitlementItem;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}