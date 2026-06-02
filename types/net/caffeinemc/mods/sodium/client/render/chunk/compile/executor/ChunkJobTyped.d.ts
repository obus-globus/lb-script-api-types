import type { Consumer } from '../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { ChunkBuildContext } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildContext.d.ts'
import type { ChunkJob } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJob.d.ts'
import type { ChunkJobResult } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/executor/ChunkJobResult.d.ts'
import type { ChunkBuilderTask } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks/ChunkBuilderTask.d.ts'
export class ChunkJobTyped<TASK extends ChunkBuilderTask<OUTPUT>, OUTPUT extends BuilderTaskOutput> extends Object implements ChunkJob {
    constructor(arg0: TASK, arg1: (param0: ChunkJobResult<OUTPUT>) => void, arg2: boolean)
    readonly blocking: boolean;
    readonly cancelled: boolean;
    // private consumer: (param0: ChunkJobResult<OUTPUT>) => void;
    readonly started: boolean;
    // private task: TASK;
    execute(arg0: ChunkBuildContext): void;
    getEstimatedDuration(): number;
    getEstimatedSize(): number;
    getEstimatedUploadDuration(): number;
    isBlocking(): boolean;
    isCancelled(): boolean;
    isStarted(): boolean;
    setCancelled(): void;
}