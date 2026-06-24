import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlobDB$IndexEntry extends Record {
    private constructor(offset: number, length: number)
    // private length: number;
    // private offset: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    length(): number;
    offset(): number;
    toString(): string;
}