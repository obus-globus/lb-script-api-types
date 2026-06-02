import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedSuggestionProvider } from '../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class SuggestionProviders$RegisteredSuggestion extends Record implements SuggestionProvider<SharedSuggestionProvider> {
    private constructor(name: Identifier, delegate: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>)
    // private delegate: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    // private name: Identifier;
    delegate(): (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    equals(o: Object | null): boolean;
    getSuggestions(context: CommandContext<SharedSuggestionProvider>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    hashCode(): number;
    name(): Identifier;
    toString(): string;
}