import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IndirectPointer extends Record {
    constructor(buffer: number, offset: number)
    // private buffer: number;
    // private offset: number;
    buffer(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    toString(): string;
}