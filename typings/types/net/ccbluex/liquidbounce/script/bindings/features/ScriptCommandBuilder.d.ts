import type { Command } from '../../../../../../com/mojang/brigadier/Command.d.ts'
import type { ArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { LiteralCommandNode } from '../../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { ScriptCommandBuilder$BuiltCommand } from '../../../../../../net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder$BuiltCommand.d.ts'
import type { Value } from '../../../../../../org/graalvm/polyglot/Value.d.ts'
/**
 * Builds a Brigadier command tree from a JavaScript command object.
 *
 * The object still uses `name`, `aliases`, `subcommands`, `parameters`, and `onExecute`.
 * `hub` is unused: a command without `onExecute` is only a parent for subcommands.
 * A parameter whose `required` is missing, `undefined`, or `null` is optional, matching
 * the previous script contract (`if (parameter.required)`).
 * Parameter chains follow the same optional-tail rules as the in-tree DSL
 * ({@link net.ccbluex.liquidbounce.features.command.brigadier.CmdArgChain}): omitting a
 * trailing optional still runs `onExecute`. Nested `aliases` are redirecting sibling
 * literals of that subcommand, not extra root commands.
 *
 * - A `vararg` without a custom `validate` is a single greedy string and reaches
 *   `onExecute` as one `String`. A `vararg` with `validate` keeps per-token parsing
 *   and arrives as an `Array`.
 * - `getCompletions` is adapted into a Brigadier {@link com.mojang.brigadier.suggestion.SuggestionProvider}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt:66}
 */
export class ScriptCommandBuilder extends Object {
    constructor(commandObject: Value)
    // private commandObject: Value;
    // private attachParameterChain(parameters: Value[], index: number, path: string[], execution: (param0: CommandContext<ClientCommandSource>) => number): ArgumentBuilder<ClientCommandSource, any>;
    /**
     * Returns the main command node plus one redirecting literal per alias; all of them
     * must be registered (and later unregistered by name) on the {@link net.ccbluex.liquidbounce.features.command.CommandManager}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/features/ScriptCommandBuilder.kt:72}
     */
    build(): LiteralCommandNode<ClientCommandSource>[];
    // private collectArgument(param: Value, ctx: CommandContext<ClientCommandSource>): Object | null;
    // private createCommand(commandObject: Value, path: string[]): ScriptCommandBuilder$BuiltCommand;
    // private isRequired(param: Value): boolean;
    // private toObject<T extends unknown>(v: Value): T;
    // private validateParameters(parameters: Value[]): void;
    // private validateSubcommandNames(subcommands: Value[]): void;
}