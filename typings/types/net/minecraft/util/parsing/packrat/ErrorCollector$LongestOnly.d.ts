import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ErrorCollector } from '../../../../../net/minecraft/util/parsing/packrat/ErrorCollector.d.ts'
import type { ErrorCollector$LongestOnly$MutableErrorEntry } from '../../../../../net/minecraft/util/parsing/packrat/ErrorCollector$LongestOnly$MutableErrorEntry.d.ts'
import type { ErrorEntry } from '../../../../../net/minecraft/util/parsing/packrat/ErrorEntry.d.ts'
import type { SuggestionSupplier } from '../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
export class ErrorCollector$LongestOnly<S extends Object | number | string | boolean> extends Object implements ErrorCollector<S> {
    constructor()
    // private entries: ErrorCollector$LongestOnly$MutableErrorEntry<S>[];
    // private lastCursor: number;
    // private nextErrorEntry: number;
    // private addErrorEntry(suggestions: SuggestionSupplier<S>, reason: Object): void;
    cursor(): number;
    // private discardErrorsFromShorterParse(cursor: number): void;
    entries(): ErrorEntry<S>[];
    finish(finalCursor: number): void;
    store(cursor: number, reason: Object): void;
    store(cursor: number, suggestions: SuggestionSupplier<S>, reason: Object): void;
    store(cursor: number, reason: Object): void;
}