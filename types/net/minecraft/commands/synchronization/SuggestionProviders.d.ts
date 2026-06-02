import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SharedSuggestionProvider } from '../../../../net/minecraft/commands/SharedSuggestionProvider.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class SuggestionProviders extends Object {
    static ASK_SERVER: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static AVAILABLE_SOUNDS: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static SUMMONABLE_ENTITIES: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static cast(paramprovider: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>): (param0: Object | null, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static getName(paramprovider: (param0: Object | null, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>): Identifier;
    static getProvider(paramname: Identifier): (param0: Object | null, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    static register(paramname: Identifier, paramprovider: (param0: SharedSuggestionProvider, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>): (param0: Object | null, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    constructor()
}