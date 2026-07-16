import type { ContextChain } from '../../../../com/mojang/brigadier/context/ContextChain.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandResultCallback } from '../../../../net/minecraft/commands/CommandResultCallback.d.ts'
import type { ExecutionCommandSource } from '../../../../net/minecraft/commands/ExecutionCommandSource.d.ts'
import type { CommandQueueEntry } from '../../../../net/minecraft/commands/execution/CommandQueueEntry.d.ts'
import type { Frame$FrameControl } from '../../../../net/minecraft/commands/execution/Frame$FrameControl.d.ts'
import type { TraceCallbacks } from '../../../../net/minecraft/commands/execution/TraceCallbacks.d.ts'
import type { InstantiatedFunction } from '../../../../net/minecraft/commands/functions/InstantiatedFunction.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class ExecutionContext<T extends unknown> extends Object implements AutoCloseable {
    static queueInitialCommandExecution<T extends ExecutionCommandSource<T>>(paramcontext: ExecutionContext<T>, paramcommand: string, paramexecutionChain: ContextChain<T>, paramsender: T, paramcommandReturn: (param0: boolean, param1: number) => void): void;
    static queueInitialFunctionCall<T extends ExecutionCommandSource<T>>(paramcontext: ExecutionContext<T>, paramfunction: InstantiatedFunction<T>, paramsender: T, paramfunctionReturn: (param0: boolean, param1: number) => void): void;
    constructor(commandLimit: number, forkLimit: number, profiler: ProfilerFiller)
    // private commandLimit: number;
    // private commandQueue: CommandQueueEntry<T>[];
    // private commandQuota: number;
    // private currentFrameDepth: number;
    // private forkLimit: number;
    // private newTopCommands: CommandQueueEntry<T>[];
    // private profiler: ProfilerFiller;
    // private queueOverflow: boolean;
    // private tracer: TraceCallbacks;
    close(): void;
    discardAtDepthOrHigher(depthToDiscard: number): void;
    forkLimit(): number;
    frameControlForDepth(depthToDiscard: number): () => void;
    // private handleQueueOverflow(): void;
    incrementCost(): void;
    profiler(): ProfilerFiller;
    // private pushNewCommands(): void;
    queueNext(entry: CommandQueueEntry<T>): void;
    runCommandQueue(): void;
    tracer(): TraceCallbacks;
    tracer(tracer: TraceCallbacks): void;
}