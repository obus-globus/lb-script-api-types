import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SuggestionsUtil extends Object {
    static suggestMatching(paramarg0: string[], paramarg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    static suggestMatching(paramarg0: Stream<Object>, paramarg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    constructor()
}