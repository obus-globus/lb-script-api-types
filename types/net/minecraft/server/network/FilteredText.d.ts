import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FilterMask } from '../../../../net/minecraft/network/chat/FilterMask.d.ts'
export class FilteredText extends Record {
    static EMPTY: FilteredText;
    static fullyFiltered(parammessage: string): FilteredText;
    static passThrough(parammessage: string): FilteredText;
    constructor(raw: string, mask: FilterMask)
    // private mask: FilterMask;
    // private raw: string;
    equals(o: Object | null): boolean;
    filtered(): string;
    filteredOrEmpty(): string;
    hashCode(): number;
    isFiltered(): boolean;
    mask(): FilterMask;
    raw(): string;
    toString(): string;
}