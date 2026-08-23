import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ChangeSkinRequest extends Record {
    constructor(variant: string, url: string)
    // private url: string;
    /*not mapped: */ url(): string;
    // private variant: string;
    /*not mapped: */ variant(): string;
    component1(): string;
    component2(): string;
    copy(variant: string, url: string): ChangeSkinRequest;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}