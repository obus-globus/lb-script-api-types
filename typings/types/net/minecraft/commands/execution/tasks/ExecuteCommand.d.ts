import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ChainModifiers } from '../../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
export class ExecuteCommand<T extends ExecutionCommandSource<T>> extends Object implements UnboundEntryAction<T> {
    constructor(commandInput: string, modifiers: ChainModifiers, executionContext: CommandContext<T>)
    // private commandInput: string;
    // private executionContext: CommandContext<T>;
    // private modifiers: ChainModifiers;
    bind(sender: T): (param0: T, param1: ExecutionContext<Object>) => void;
    execute(sender: T, context: ExecutionContext<T>, frame: Frame): void;
}