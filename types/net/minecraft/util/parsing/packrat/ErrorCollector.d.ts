import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SuggestionSupplier } from '../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
export interface ErrorCollector<S extends Object | number | string | boolean> extends Object{
    finish(finalCursor: number): void;
    store(cursor: number, reason: Object): void;
    store(cursor: number, suggestions: SuggestionSupplier<S>, reason: Object): void;
}