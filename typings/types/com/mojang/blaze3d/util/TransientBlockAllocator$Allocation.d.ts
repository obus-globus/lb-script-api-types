import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TransientBlockAllocator$Allocation<T extends unknown> extends Record {
    constructor(block: T, offset: number, size: number)
    // private block: T;
    // private offset: number;
    // private size: number;
    block(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    offset(): number;
    size(): number;
    toString(): string;
}