import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TagData extends Record {
    constructor(identifier: string, entries: number[])
    // private entries: number[];
    // private identifier: string;
    entries(): number[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}