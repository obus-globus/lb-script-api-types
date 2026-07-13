import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ActivateCapeRequest extends Record {
    constructor(capeId: string)
    // private capeId: string;
    /*not mapped: */ capeId(): string;
    component1(): string;
    copy(capeId: string): ActivateCapeRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}