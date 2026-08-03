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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L99 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:99}
 */
export class CommandManager extends Object {
    static INSTANCE: CommandManager;
    readonly size: number;
    getSize(): number;
    addCommand(command: Command): void;
    autoComplete(origCmd: string, start: number): CompletableFuture<Suggestions>;
    contains(element: Command): boolean;
    containsAll(elements: Command[]): boolean;
    execute(cmd: string): void;
    // private getSubCommand(cmd: string): CommandManager$ResolvedSubCommand | null;
    // private getSubCommand(args: string[], currentCommand: CommandManager$ResolvedSubCommand | null, idx: number): CommandManager$ResolvedSubCommand | null;
    isEmpty(): boolean;
    iterator(): Iterator<Command>;
    // private parseParameter(command: Command, argument: string, parameter: Parameter<Object>): Object;
    registerInbuilt(): void;
    removeCommand(command: Command): void;
    // private stripOuterQuotes(token: CharSequence): string;
    tokenizeCommand(line: string): CommandManager$TokenizationResult;
}