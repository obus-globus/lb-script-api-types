import type { ContextChain } from '../../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { EntryAction } from '../../../../../net/minecraft/commands/execution/EntryAction.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
import type { UnboundEntryAction } from '../../../../../net/minecraft/commands/execution/UnboundEntryAction.d.ts'
import type { BuildContexts } from '../../../../../net/minecraft/commands/execution/tasks/BuildContexts.d.ts'
export class BuildContexts$Unbound<T extends ExecutionCommandSource<T>> extends BuildContexts<T> implements UnboundEntryAction<T> {
    static ERROR_FORK_LIMIT_REACHED: DynamicCommandExceptionType;
    constructor(commandInput: string, command: ContextChain<T>)
    bind(sender: T): (param0: T, param1: ExecutionContext<Object>) => void;
    execute(sender: T, context: ExecutionContext<T>, frame: Frame): void;
}