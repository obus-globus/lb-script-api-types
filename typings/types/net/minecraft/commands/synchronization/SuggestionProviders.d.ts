import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedSuggestionProvider } from '../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class SuggestionProviders extends Object {
    static ASK_SERVER: (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static AVAILABLE_SOUNDS: (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static SUMMONABLE_ENTITIES: (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static cast(paramprovider: (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>): (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static getName(paramprovider: (param0: CommandContext<Object>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>): Identifier;
    static getProvider(paramname: Identifier): (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static register(paramname: Identifier, paramprovider: (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>): (param0: CommandContext<SharedSuggestionProvider>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    constructor()
}