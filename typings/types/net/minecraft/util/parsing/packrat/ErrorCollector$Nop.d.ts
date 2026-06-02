import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ErrorCollector } from '../../../../../net/minecraft/util/parsing/packrat/ErrorCollector.d.ts'
import type { SuggestionSupplier } from '../../../../../net/minecraft/util/parsing/packrat/SuggestionSupplier.d.ts'
export class ErrorCollector$Nop<S extends Object | number | string | boolean> extends Object implements ErrorCollector<S> {
    constructor()
    finish(finalCursor: number): void;
    store(cursor: number, suggestions: SuggestionSupplier<S>, reason: Object): void;
    store(cursor: number, reason: Object): void;
}