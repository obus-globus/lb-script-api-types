import type { Command } from '../../../../../../com/mojang/brigadier/Command.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KAsyncCommand$Handler } from '../../../../../../net/ccbluex/liquidbounce/features/command/KAsyncCommand$Handler.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdArg } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdArg.d.ts'
import type { CmdChainScope$ArgContinuation } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdChainScope$ArgContinuation.d.ts'
import type { CmdExecutorSpec } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdExecutorSpec.d.ts'
import type { CmdI18n } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdI18n.d.ts'
import type { CmdNode } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdNode.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
/**
 * Root scope of a command declaration; receives the top-level nodes declared in the
 * block of `literal(...)`.
 *
 * Argument chains are declared inline with {@link argument}/{@link optional}; each call opens a
 * nested scope whose block declares the continuation, ending in exactly one executor
 * (`exec`/`execSuspend`) per chain.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L104 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:104}
 */
export class CmdLiteralScope extends Object implements CmdI18n {
    constructor(name: string, path: string)
    // private children: CmdNode[];
    // private executor: CmdExecutorSpec | null;
    // private name: string;
    /*not mapped: */ getName$net_ccbluex_liquidbounce(): string;
    readonly path: string;
    // private requirement: ((param0: ClientCommandSource) => boolean) | null;
    // private addArgumentChain<T extends unknown>(handle: CmdArg<T>, required: boolean, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    /**
     * Declares a required argument and passes its typed handle into the continuation.
     *
     * If {@link type} consumes the reader's entire remaining input (greedy, e.g.
     * {@link com.mojang.brigadier.arguments.StringArgumentType.greedyString}),
     * it must be the last argument of the chain. The DSL only detects greediness for known types
     * ({@link com.mojang.brigadier.arguments.StringArgumentType} and
     * {@link net.ccbluex.liquidbounce.features.command.arguments.MultiTaggedArgumentType});
     * custom greedy argument types are not verified and silently produce an
     * unmatchable tree when placed before other arguments.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:152}
     */
    argument<T extends unknown>(name: string, type: ArgumentType<T>, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    /**
     * Compiles this declaration into a Brigadier literal builder.
     *
     * A chain whose arguments are all optional is also executable directly on the literal
     * (input may end before any argument), so the literal inherits that chain's leaf
     * executor. A direct executor and an all-optional chain cannot be declared together.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L228 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:228}
     */
    buildLiteral(): LiteralArgumentBuilder<ClientCommandSource>;
    /**
     * Declares an executor directly on the literal: the handler runs when the input ends
     * here. Use {@link execSuspend} for suspending handlers instead.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:127}
     */
    exec(handler: (param0: CommandContext<ClientCommandSource>) => number): void;
    /**
     * Declares a suspending executor directly on the literal, scheduled like
     * `CommandExecutor.executesSuspend` (progress message and re-entrance guard included).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L136 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:136}
     */
    execSuspend(allowParallel: boolean, handler: KAsyncCommand$Handler<ClientCommandSource>): void;
    /**
     * Declares a nested command literal. {@link aliases} are extra names registered as
     * redirecting siblings under the same parent (e.g. `.localconfig create` for `save`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L190 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:190}
     */
    literal(name: string, aliases: string[], block: (param0: CmdLiteralScope) => void): void;
    /**
     * Declares a nullable optional argument and passes its typed handle into the continuation.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L163 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:163}
     */
    optional<T extends unknown>(name: string, type: ArgumentType<T>, default_: T, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    optional<T extends unknown>(name: string, type: ArgumentType<T>, default_: void | null, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null, block: CmdChainScope$ArgContinuation<T>): void;
    /**
     * Gates execution of this command behind {@link predicate}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:119}
     */
    requires(predicate: (param0: ClientCommandSource) => boolean): void;
    t(key: string, ...args: (Object | null)[]): MutableComponent;
}