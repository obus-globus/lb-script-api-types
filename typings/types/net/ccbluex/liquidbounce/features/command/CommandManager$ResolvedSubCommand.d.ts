import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
export class CommandManager$ResolvedSubCommand extends Object {
    constructor(command: Command, index: number)
    readonly command: Command;
    readonly index: number;
    component1(): Command;
    component2(): number;
    copy(command: Command, index: number): CommandManager$ResolvedSubCommand;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}