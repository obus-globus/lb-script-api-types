import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SuggestionSupplier } from '../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
export class ErrorEntry<S extends unknown> extends Record {
    constructor(cursor: number, suggestions: SuggestionSupplier<S>, reason: Object)
    // private cursor: number;
    // private reason: Object;
    // private suggestions: SuggestionSupplier<S>;
    cursor(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    reason(): Object;
    suggestions(): SuggestionSupplier<S>;
    toString(): string;
}