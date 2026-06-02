import type { ContextChain } from '../../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { BuildContexts } from '../../../../../net/minecraft/commands/execution/tasks/BuildContexts.d.ts'
export class BuildContexts$TopLevel<T extends ExecutionCommandSource<T>> extends BuildContexts<T> implements EntryAction<T> {
    static ERROR_FORK_LIMIT_REACHED: DynamicCommandExceptionType;
    constructor(commandInput: string, command: ContextChain<T>, source: T)
    // private source: T;
    execute(context: ExecutionContext<T>, frame: Frame): void;
}