import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CommandDispatcher } from '../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { LiteralCommandNode } from '../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { WorldChangeEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { CommandManager$TokenizationResult } from '../../../../../net/ccbluex/liquidbounce/features/command/CommandManager$TokenizationResult.d.ts'
import type { CommandRegistrar } from '../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Contains routines for handling commands
 * and the command registry
 *
 * All commands are registered directly against a Brigadier {@link CommandDispatcher} (see the
 * `brigadier` package DSL); the legacy meta-model has been removed.
 *
 * @author superblaubeere27 (@team CCBlueX)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:101}
 */
export class CommandManager extends Object implements EventListener {
    static INSTANCE: CommandManager;
    // private brigadierDispatcher: CommandDispatcher<ClientCommandSource> | null;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private directCommandRegistrars: CommandRegistrar[];
    /*not mapped: */ getMainCommandNodes$net_ccbluex_liquidbounce(): LiteralCommandNode<ClientCommandSource>[];
    /*not mapped: */ getRootCommandNodes$net_ccbluex_liquidbounce(): LiteralCommandNode<ClientCommandSource>[];
    readonly running: boolean;
    // private scriptCommandNodes: JavaMap<string, LiteralCommandNode<ClientCommandSource>>;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    autoComplete(origCmd: string, start: number): CompletableFuture<Suggestions>;
    // private buildUsage(context: CommandContext<ClientCommandSource>): Component[];
    children(): EventListener[];
    /**
     * Executes a command.
     *
     * @param cmd The command. If there is no command in it (it is empty or only whitespaces), this method is a no op
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L313 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:313}
     */
    execute(cmd: string): void;
    // private getDispatcher(): CommandDispatcher<ClientCommandSource>;
    /**
     * Drops the cached dispatcher so it is rebuilt with fresh argument state on next use.
     *
     * Called on world join/leave ({@link net.ccbluex.liquidbounce.event.events.WorldChangeEvent}):
     * argument types capture the registry access / feature flags at construction time
     * (e.g. `itemArgument()`, `resourceArgument()`), so a world change invalidates them.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L252 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:252}
     */
    invalidate(): void;
    parent(): EventListener | null;
    /**
     * Registers a command written directly against the Brigadier tree.
     *
     * The registrar is recorded so it is replayed whenever the dispatcher is rebuilt
     * (see {@link getDispatcher}). If a dispatcher is already cached, the registrar is applied
     * to it once; if the cache is empty, the next {@link getDispatcher} rebuild includes it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L206 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:206}
     */
    register(registrar: CommandRegistrar): void;
    registerInbuilt(): void;
    /**
     * Registers script-provided command nodes
     * (see {@link net.ccbluex.liquidbounce.script.bindings.features.ScriptCommandBuilder}).
     *
     * All nodes are replayed whenever the dispatcher is rebuilt. Any node name already
     * taken on the dispatcher root - by a built-in command or another script - fails
     * the whole registration, mirroring the previous `addCommand` duplicate-name check.
     * Without this, Brigadier would silently merge the node onto the existing root child,
     * overriding its command or grafting grandchildren into it.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L221 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:221}
     */
    registerScriptCommands(nodes: LiteralCommandNode<ClientCommandSource>[]): void;
    // private resolvePathTokenCount(tokens: string[]): number;
    // private shiftSuggestionRanges(suggestions: Suggestions, offset: number): Suggestions;
    // private stripOuterQuotes(token: CharSequence): string;
    /**
     * Tokenizes the {@link line}.
     *
     * For example: `.friend add "Senk Ju"` -> [[`.friend`, `add`, `Senk Ju`]]
     *
     * @returns A pair of the tokenized command and the starting indices of the tokens
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L411 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:411}
     */
    tokenizeCommand(line: string): CommandManager$TokenizationResult;
    // private unknownCommandHints(argument: string): Component[];
    unregister(): void;
    /**
     * Unregisters script-provided command nodes by name, rebuilding the dispatcher.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L240 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:240}
     */
    unregisterScriptCommands(names: string[]): void;
}