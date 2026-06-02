import type { Message } from '../../../../com/mojang/brigadier/Message.d.ts'
import type { Suggestion } from '../../../../com/mojang/brigadier/suggestion/Suggestion.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SuggestionsBuilder extends Object {
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: string, arg2: number)
    readonly input: string;
    // private inputLowerCase: string;
    readonly remaining: string;
    readonly remainingLowerCase: string;
    // private result: Suggestion[];
    readonly start: number;
    add(arg0: SuggestionsBuilder): SuggestionsBuilder;
    build(): Suggestions;
    buildFuture(): CompletableFuture<Suggestions>;
    createOffset(arg0: number): SuggestionsBuilder;
    getInput(): string;
    getRemaining(): string;
    getRemainingLowerCase(): string;
    getStart(): number;
    restart(): SuggestionsBuilder;
    suggest(arg0: number): SuggestionsBuilder;
    suggest(arg0: number, arg1: Message): SuggestionsBuilder;
    suggest(arg0: string): SuggestionsBuilder;
    suggest(arg0: string, arg1: Message): SuggestionsBuilder;
}