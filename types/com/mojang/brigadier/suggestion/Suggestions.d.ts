import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { Suggestion } from '../../../../com/mojang/brigadier/suggestion/Suggestion.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Suggestions extends Object {
    static create(paramarg0: string, paramarg1: E[]): Suggestions;
    static empty(): CompletableFuture<Suggestions>;
    static merge(paramarg0: string, paramarg1: E[]): Suggestions;
    constructor(arg0: StringRange, arg1: Suggestion[])
    readonly range: StringRange;
    // private suggestions: Suggestion[];
    equals(arg0: Object | null): boolean;
    getList(): Suggestion[];
    getRange(): StringRange;
    hashCode(): number;
    isEmpty(): boolean;
    toString(): string;
}