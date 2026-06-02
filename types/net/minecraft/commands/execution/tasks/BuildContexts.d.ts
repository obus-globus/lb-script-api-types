import type { ContextChain } from '../../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BuildContextsAccessor } from '../../../../../net/fabricmc/fabric/mixin/entity/event/effect/BuildContextsAccessor.d.ts'
import type { ExecutionCommandSource } from '../../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { ChainModifiers } from '../../../../../net/minecraft/commands/execution/ChainModifiers.d.ts'
import type { ExecutionContext } from '../../../../../net/minecraft/commands/execution/ExecutionContext.d.ts'
import type { Frame } from '../../../../../net/minecraft/commands/execution/Frame.d.ts'
export class BuildContexts<T extends ExecutionCommandSource<T>> extends Object implements BuildContextsAccessor<Object> {
    static ERROR_FORK_LIMIT_REACHED: DynamicCommandExceptionType;
    constructor(commandInput: string, command: ContextChain<T>)
    readonly command: ContextChain<T>;
    // private commandInput: string;
    execute(originalSource: T, initialSources: T[], context: ExecutionContext<T>, frame: Frame, initialModifiers: ChainModifiers): void;
    toString(): string;
    traceCommandStart(context: ExecutionContext<T>, frame: Frame): void;
}