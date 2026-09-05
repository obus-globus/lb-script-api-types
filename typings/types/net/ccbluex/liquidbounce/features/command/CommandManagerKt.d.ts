import type { ParseResults } from '../../../../../com/mojang/brigadier/ParseResults.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandException } from '../../../../../net/ccbluex/liquidbounce/features/command/CommandException.d.ts'
import type { ClientCommandSource } from '../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class CommandManagerKt extends Object {
    /**
     * Lower-cases only the leading {@link tokenCount} space-separated tokens of {@link cmd} (the command
     * path: root command name and subcommand names), leaving all argument values untouched.
     *
     * This preserves the previous case-insensitive behaviour of command paths while keeping
     * parameter values (e.g. `.rename MyItem`) intact.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L529 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:529}
     */
    static lowercaseCommandPath(cmd: string, tokenCount: number): string;
    /**
     * Maps leftover parse input to a {@link CommandException}, mirroring vanilla
     * {@link CommandDispatcher.execute}: a single parse exception is surfaced, an empty
     * context range is an unknown command, and leftover tokens after a matched
     * command are invalid usage.
     *
     * Built-in Brigadier argument failures keep their raw message (a translatable
     * component is preserved as-is, so vanilla errors localize through the client
     * language system). When the failing exception carries cursor information (from `createWithContext`),
     * the Brigadier context string (`...input<--{@link HERE}`) is appended as a dim line,
     * mirroring vanilla's error rendering. Usage is attached here because argument
     * types do not see the command tree at parse time.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L618 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:618}
     */
    static mapParseFailure(parse: ParseResults<ClientCommandSource>, commandName: string, usage: Component[], unknownHints: Component[]): CommandException;
    /**
     * Collapses runs of whitespace outside of quoted strings into a single space, mirroring
     * the previous tokenizer behaviour that ignored repeated spaces (`.cmd a   b` was parsed
     * as two tokens). Content inside quotes is preserved verbatim.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L564 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:564}
     */
    static normalizeCommandSpaces(input: string): string;
}