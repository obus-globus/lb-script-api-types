import type { CommandDispatcher } from '../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { RequiredArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/RequiredArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { StringRange } from '../../../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { LiteralCommandNode } from '../../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
export class DslKt extends Object {
    /**
     * Type-safe argument access, mirroring `ctx.getArgument(name, clazz)` as used by the
     * typed getters in vanilla commands (e.g. `ItemArgument.getItem(ctx, "item")`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt:48}
     */
    static arg<T extends unknown>(self: CommandContext<ClientCommandSource>, name: string): T;
    static argument<T extends unknown>(name: string, type: ArgumentType<T>): RequiredArgumentBuilder<ClientCommandSource, T>;
    /**
     * The context whose {@link CommandContext.command} should run for this parse.
     *
     * A redirecting alias copies the target's command onto the alias node so a bare alias
     * still executes. Brigadier then hangs that command on the **outer** context and puts
     * any remaining parse (arguments, subcommands) on a **child**. {@link CommandContext.getArgument}
     * does not look at children, so stopping at the first `command != null` would run the
     * alias layer with empty arguments — or the parent handler instead of a subcommand.
     *
     * The deepest context that actually has a command matches the consumed input. A bare
     * alias has no child and lands on the copied command.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt:63}
     */
    static deepestExecutableContext<S extends unknown>(self: CommandContext<S>): CommandContext<S> | null;
    /**
     * Thin aliases that fix the source type of the Brigadier builders to {@link ClientCommandSource},
     * mirroring the convenience factories of Minecraft's `Commands` class
     * (`Commands.literal` / `Commands.argument`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt:38}
     */
    static literal(name: string): LiteralArgumentBuilder<ClientCommandSource>;
    static offset(self: StringRange, offset: number): StringRange;
    /**
     * A sibling literal that redirects to {@link mainNode}, copying `requires` and a no-argument
     * `command` so gating is not bypassed and a bare alias still executes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt:94}
     */
    static redirectingAlias(mainNode: LiteralCommandNode<ClientCommandSource>, alias: string): LiteralCommandNode<ClientCommandSource>;
    /**
     * Registers {@link aliases} as redirecting literal nodes that share the subtree of {@link mainNode}.
     *
     * This mirrors the alias handling of the legacy meta-model (an alias executes the exact
     * same command tree) while keeping a single copy of the tree in memory. The main node's
     * `requires` predicate is copied onto each alias so gating (e.g. `requiresIngame`) is not
     * bypassed through a redirect.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/Dsl.kt:83}
     */
    static registerAliases(self: CommandDispatcher<ClientCommandSource>, mainNode: LiteralCommandNode<ClientCommandSource>, aliases: string[]): void;
}