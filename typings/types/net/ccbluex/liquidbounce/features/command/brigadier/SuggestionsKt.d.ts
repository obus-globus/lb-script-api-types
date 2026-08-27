import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SuggestionsKt extends Object {
    /**
     * Suggests the names of the players currently online (tab list), vanilla-filtered.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Suggestions.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Suggestions.kt:30}
     */
    static onlinePlayers<S extends unknown>(): (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    /**
     * Appends all elements from {@link strings} as suggestion, filtered by the vanilla
     * {@link SharedSuggestionProvider} matching (case-insensitive prefix / substring).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Suggestions.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Suggestions.kt:36}
     */
    static suggestions<S extends unknown>(strings: string[]): (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static suggestions<S extends unknown>(...strings: string[]): (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static suggestions<S extends unknown>(executor: Executor, strings: () => string[] | null): (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    static suggestions<S extends unknown>(strings: () => string[] | null): (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
}