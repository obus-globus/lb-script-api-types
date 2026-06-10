import type { Thread } from '../../../../../../../../../java/lang/Thread.d.ts'
import type { AtomicInteger } from '../../../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Consumer } from '../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { ChunkJob } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { ChunkJobQueue } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobQueue.d.ts'
import type { ChunkJobResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobResult.d.ts'
import type { ChunkJobTyped } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobTyped.d.ts'
import type { ChunkBuilderTask } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderTask.d.ts'
import type { ChunkVertexType } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { ClientLevel } from '../../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export class ChunkBuilder extends Object {
    constructor(arg0: ClientLevel, arg1: ChunkVertexType)
    readonly busyThreadCount: AtomicInteger;
    // private localContext: ChunkBuildContext;
    // private queue: ChunkJobQueue;
    // private threads: Thread[];
    getBusyFraction(arg0: number): number;
    getBusyThreadCount(): number;
    getScheduledJobCount(): number;
    getTotalRemainingDuration(arg0: number): number;
    getTotalThreadCount(): number;
    isBuildQueueEmpty(): boolean;
    scheduleTask<TASK extends ChunkBuilderTask<OUTPUT>, OUTPUT extends BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: (param0: ChunkJobResult<OUTPUT>) => void, arg3: boolean): ChunkJobTyped<TASK, OUTPUT>;
    shutdown(): void;
    // private shutdownThreads(): void;
    tryStealTask(arg0: ChunkJob): void;
}