import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { CommandManager$ResolvedSubCommand } from '../../../../../net/ccbluex/liquidbounce/features/command/CommandManager$ResolvedSubCommand.d.ts'
import type { CommandManager$TokenizationResult } from '../../../../../net/ccbluex/liquidbounce/features/command/CommandManager$TokenizationResult.d.ts'
import type { Parameter } from '../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
/**
 * Contains routines for handling commands
 * and the command registry
 *
 * @author superblaubeere27 (@team CCBlueX)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L91 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:91}
 */
export class CommandManager extends Object {
    static INSTANCE: CommandManager;
    readonly size: number;
    addCommand(command: Command): void;
    autoComplete(origCmd: string, start: number): CompletableFuture<Suggestions>;
    contains(element: Command): boolean;
    containsAll(elements: Command[]): boolean;
    /**
     * Executes a command.
     *
     * @param cmd The command. If there is no command in it (it is empty or only whitespaces), this method is a no op
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L230 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:230}
     */
    execute(cmd: string): void;
    // private getSubCommand(cmd: string): CommandManager$ResolvedSubCommand | null;
    // private getSubCommand(args: string[], currentCommand: CommandManager$ResolvedSubCommand | null, idx: number): CommandManager$ResolvedSubCommand | null;
    isEmpty(): boolean;
    iterator(): Iterator<Command>;
    // private parseParameter(command: Command, argument: string, parameter: Parameter<Object>): Object;
    registerInbuilt(): void;
    removeCommand(command: Command): void;
    // private stripOuterQuotes(token: CharSequence): string;
    /**
     * Tokenizes the {@link line}.
     *
     * For example: `.friend add "Senk Ju"` -> [[`.friend`, `add`, `Senk Ju`]]
     *
     * @returns A pair of the tokenized command and the starting indices of the tokens
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L391 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:391}
     */
    tokenizeCommand(line: string): CommandManager$TokenizationResult;
}