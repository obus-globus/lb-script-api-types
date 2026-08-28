import type { Command } from '../../../../../../com/mojang/brigadier/Command.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KAsyncCommand$Handler } from '../../../../../../net/ccbluex/liquidbounce/features/command/KAsyncCommand$Handler.d.ts'
import type { ChainElement } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ChainElement.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdChainScope$ArgContinuation } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdChainScope$ArgContinuation.d.ts'
import type { CmdI18n } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdI18n.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
/**
 * Scope used to append the continuation of one argument chain.
 * Nested scopes share the same backing element list.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L258 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:258}
 */
export class CmdChainScope extends Object implements CmdI18n {
    constructor(elements: ChainElement[], path: string)
    // private elements: ChainElement[];
    readonly path: string;
    /**
     * Appends a required argument and passes its typed handle into the continuation.
     *
     * See the greedy-argument caveat on {@link CmdLiteralScope.argument}: it applies here too.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L269 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:269}
     */
    argument<T extends unknown>(name: string, type: ArgumentType<T>, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    /**
     * Declares the executable leaf of this chain.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L307 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:307}
     */
    exec(handler: (param0: CommandContext<ClientCommandSource>) => number): void;
    /**
     * Declares a suspending executable leaf of this chain.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L312 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:312}
     */
    execSuspend(allowParallel: boolean, handler: KAsyncCommand$Handler<ClientCommandSource>): void;
    /**
     * Appends an optional argument. Omitted values are resolved from the declared default;
     * all following arguments must also be optional.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L283 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:283}
     */
    optional<T extends unknown>(name: string, type: ArgumentType<T>, default_: T, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    optional<T extends unknown>(name: string, type: ArgumentType<T>, default_: void | null, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    t(key: string, ...args: (Object | null)[]): MutableComponent;
}